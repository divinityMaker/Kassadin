const { ipcRenderer } = require("electron");

document.getElementById("skinListButton").addEventListener("click", () => {
  ipcRenderer.send("skinList");
});
