const path = require("path");
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // 新しいウィンドウを作成
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Barの非表示
  win.setMenuBarVisibility(false);

  // Reactアプリのロード
  win.loadFile(path.join(__dirname, "elbaup-app/build/index.html"));
  console.log(path.join(__dirname, "elbaup-app/build/index.html"));
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
