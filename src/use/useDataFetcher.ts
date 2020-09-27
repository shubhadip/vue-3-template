import { reactive, onMounted, ref } from "vue";
import Axios from "axios";

interface EMPLIST {
  employee_age: number;
  employee_name: string;
  employee_salary: number;
  id: number;
  profile_image: string;
}

interface TData {
  data: EMPLIST[] | null;
  error: boolean;
}

export function useDataFetcher({ url }: { url: string }) {
  const defaultValue: TData = {
    data: null,
    error: false
  };

  const isFetching = ref<boolean>(true);
  const apiDetails = reactive<TData>(defaultValue);

  async function fetchData() {
    try {
      const response = await Axios.get(url);
      apiDetails.data = response.data.data;
    } catch (e) {
      apiDetails.error = true;
    } finally {
      isFetching.value = false;
    }
  }

  onMounted(() => {
    fetchData();
  });

  return { isFetching, apiDetails };
}
