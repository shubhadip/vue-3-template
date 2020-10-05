export function useBackHandler() {
  function onBackClick(): void {
    console.error("Back functionality is overriden but not implemented");
  }

  function backEventHandler(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    onBackClick();
  }

  function addBackhandler(): void {
    document.addEventListener("back", backEventHandler);
  }

  function removeBackhandler(): void {
    document.removeEventListener("back", backEventHandler);
  }

  return {
    addBackhandler,
    removeBackhandler
  };
}
