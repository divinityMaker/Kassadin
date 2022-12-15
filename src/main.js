const { ipcMain } = require("electron");
const { shell } = require("electron");
const { app, BrowserWindow } = require("electron");
const path = require("path");

require("electron-reload")(__dirname, "./src/*");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./src/preload.js"),
    },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("./src/index.html");

};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("skinList", function () {
  shell.openExternal(
    "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/"
  );
  shell.openExternal("https://pastebin.com/raw/uxJFRYy7");
});