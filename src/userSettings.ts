export const userSettings = {
  graphicsResolution: () =>
    Number.parseInt(localStorage.getItem("graphicsResolution") || "1")
};
