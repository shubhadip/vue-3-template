import { counterModule } from "@/store/counter/index";

export default function createStoreConfig() {
  return {
    modules: {
      counterModule
    }
  };
}
