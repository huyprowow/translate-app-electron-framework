const { app, BrowserWindow } = require("electron");
const path = require("path");

const loadMainWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "index.html"));
};

app.whenReady().then(() => {
  loadMainWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      loadMainWindow();
    }
  });
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
