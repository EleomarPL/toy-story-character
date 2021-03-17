const { app, BrowserWindow, ipcMain } = require("electron");
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database(path.join(app.getAppPath(), 'db', 'toystory.db'));

let mainWindow = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(app.getAppPath(), 'preload.js')
    },
  });
  //production
  // createWindow.loadFile(path.join(__dirname, "dist", "index.html"));
  //developing
  mainWindow.loadURL("http://localhost:8080");
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

/**
 * Evento get:node
 */
ipcMain.on('get:node', (_, node) => {
  db.get('SELECT * FROM characters WHERE node=?', [node], (err, row) => {
    if(err) {
      return console.log(err.message);
    }
    mainWindow.webContents.send('send:data', row);
  });
})