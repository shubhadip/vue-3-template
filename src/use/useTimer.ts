import { reactive, onMounted, onUnmounted, onUpdated } from "vue";

interface TInterval {
  seconds: number;
  isActive: boolean;
  interval: number | undefined;
}

export function useTimer({ secondsValue }: { secondsValue: number }) {
  const timerDetails = reactive<TInterval>({
    seconds: secondsValue,
    isActive: true,
    interval: undefined
  });

  function update() {
    if (timerDetails.isActive && timerDetails.seconds > 0) {
      timerDetails.interval = setInterval(() => {
        timerDetails.seconds = timerDetails.seconds - 1;
      }, 1000);
    }
  }

  onUpdated(() => {
    if (timerDetails.seconds == 0) {
      clearInterval(timerDetails.interval);
      timerDetails.isActive = false;
    }
  });
  onMounted(() => {
    update();
  });

  onUnmounted(() => {
    clearInterval(timerDetails.interval);
  });

  return { timerDetails };
}
