<template>
<div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is an network page</h1>
</div>
<div>
    <div class="elabel">
        <h3>Posts List {{ amt }}</h3>
        <SampleComponent />
    </div>
    <div class="employee">
        <div v-if="!isFetching">
            <div v-if="empSelected.id">
                {{ empSelected }}
            </div>
            <div v-for="elem in apiDetails" :key="elem" class="elist">
                <div @click="
              selectEmployee(elem);
              incrementCount(elem);
            " class="eitem" style="text-align:left;margin: 10px 40px;border: 1px solid #efefef;padding:10px;border-radius : 10px;">
                    <strong>{{ elem.id }}.</strong> {{ elem.body }}
                </div>
            </div>
        </div>
        <div v-else class="loading">
            Loading ...
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    computed,
    ref
} from "vue";
import {
    useStore
} from "@/use/useStore";
import {
    usePost
} from "@/use/usePost";
import {
    useAmountInWords
} from "@/use/useAmountInWords";
import {
    useBackHandler
} from "@/use/useBackHandler";
import {
    AllActionTypes
} from "@/store/action-types";
import {
    POSTS
} from "@/store/modules/counter/actions";
// import {
//     mapStores
// } from 'vuex';
import {
    Store
} from "@/store";
import {
    SampleComponent
} from 'shubh-vue-component-library';
export default defineComponent({
    name: "Network",
    components: {
        SampleComponent,
    },
    setup() {
        const store: Store = useStore();
        const amt = ref < string | undefined > ();

        const {
            selectEmployee,
            empSelected
        } = usePost();
        const apiDetails = computed((): POSTS[] => store.getters.getPosts);
        const isFetching = ref < boolean > (true);
        store.dispatch(AllActionTypes.FETCH_EMPLOYEES).then(() => {
            isFetching.value = false;
        });

        function incrementCount(elem: POSTS) {
            const {
                amount
            } = useAmountInWords(elem.id);
            amt.value = amount;
        }

        const {
            addBackhandler,
            removeBackhandler
        } = useBackHandler();

        return {
            apiDetails,
            isFetching,
            selectEmployee,
            empSelected,
            amt,
            incrementCount,
            removeBackhandler,
            addBackhandler
        };
    },
    unmounted() {
        this.removeBackhandler();
    },
    mounted() {
        this.addBackhandler();
    }
});
</script>
