<template>
<div class="about">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1 @click="test">This is an about page</h1>
    <hello-world></hello-world>
    <toast-component></toast-component>
</div>
<div></div>
</template>

<script lang="ts">
import {
    defineComponent
} from "vue";

import {
    useStore
} from "@/use/useStore";

const store = useStore();

export default defineComponent({
    name: "Test",
    data() {
        return {

        }
    },
    methods: {
        test() {
            this.$store;
            console.log(this.$toasted);
        }
    }
});
</script>
