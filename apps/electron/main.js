const { app, BrowserWindow, powerMonitor } = require("electron");

let mainWindow;
let idleTime = 0;
let wasIdle = false;

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
    refreshWebview();
  });

  powerMonitor.on("resume", () => {
    mainWindow.webContents.send("user-active");
  });

  // Check for screen lock/unlock
  powerMonitor.on("lock-screen", () => {
    mainWindow.webContents.send("user-idle", "Screen locked");
    refreshWebview();
  });

  powerMonitor.on("unlock-screen", () => {
    mainWindow.webContents.send("user-active");
  });

  // Check for system idle time
  setInterval(() => {
    const idleState = powerMonitor.getSystemIdleState(1);
    if (idleState === "idle") {
      idleTime++;

      const isOverThreshold = idleTime >= IDLE_THRESHOLD;

      if (isOverThreshold && !wasIdle) {
        wasIdle = true;
        refreshWebview();
      }

      if (isOverThreshold) {
        mainWindow.webContents.send(
          "user-idle",
          `System idle for ${idleTime} seconds`
        );
      }
    } else {
      if (wasIdle) {
        wasIdle = false;
        mainWindow.webContents.send("user-active");
      }
      idleTime = 0;
    }
  }, 1000);
}

function refreshWebview() {
  if (mainWindow) {
    console.log("refreshing webview");
    mainWindow.webContents.executeJavaScript(`
      document.querySelector('webview')?.reload();
    `);
  }
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
