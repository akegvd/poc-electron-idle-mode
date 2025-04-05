const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let idleTime = 0;
const IDLE_THRESHOLD = 5; // 5 seconds of inactivity

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadFile("index.html");

  // Check for user activity
  setInterval(() => {
    idleTime++;
    if (idleTime >= IDLE_THRESHOLD) {
      mainWindow.webContents.send("user-idle", idleTime);
    }
  }, 1000);

  // Reset idle time on user activity
  mainWindow.on("mousemove", () => {
    idleTime = 0;
    mainWindow.webContents.send("user-active");
  });

  mainWindow.on("keydown", () => {
    idleTime = 0;
    mainWindow.webContents.send("user-active");
  });
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
