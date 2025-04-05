const { app, BrowserWindow, ipcMain, powerMonitor } = require("electron");
const path = require("path");

let mainWindow;
let idleTime = 0;
const IDLE_THRESHOLD = 5; // 5 seconds of inactivity

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
    },
  });

  mainWindow.loadFile("index.html");

  // Check for system idle state
  powerMonitor.on("suspend", () => {
    mainWindow.webContents.send("user-idle", "System suspended");
  });

  powerMonitor.on("resume", () => {
    mainWindow.webContents.send("user-active");
  });

  // Check for screen lock/unlock
  powerMonitor.on("lock-screen", () => {
    mainWindow.webContents.send("user-idle", "Screen locked");
  });

  powerMonitor.on("unlock-screen", () => {
    mainWindow.webContents.send("user-active");
  });

  // Check for system idle time
  setInterval(() => {
    const idleState = powerMonitor.getSystemIdleState(1);
    if (idleState === "idle") {
      idleTime++;
      if (idleTime >= IDLE_THRESHOLD) {
        mainWindow.webContents.send(
          "user-idle",
          `System idle for ${idleTime} seconds`
        );
      }
    } else {
      idleTime = 0;
      mainWindow.webContents.send("user-active");
    }
  }, 1000);
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
