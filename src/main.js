const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require('path');
const sqlite3 = require('sqlite3').verbose();

/**
 * Este proyecto utiliza sqlite como manejador de base datos. El modulo que proporciona acceso a la API
 * de sqlite es sqlite3 (nombre registrado en npm).
 * Para abrir una conexión con la base de datos ./db/toystory.db debemos crear un objeto Database,
 * para esto pasamos la ruta de la base datos al constructor.
 */
let db = new sqlite3.Database(path.join(app.getAppPath(), 'db', 'toystory.db'));

/**
 * mainWindow, almacenara la referencia a un objeto BrowserWindow, la ventana que será el proceso de
 * render principal.
 */
let mainWindow = null;

/**
 * No se utilizara el menu por defecto que proporciona electron.
 */
Menu.setApplicationMenu(null);

/**
 * La función createWindow crea una instancia de BrowserWindow, que configura la ventana para que sea
 * de 800 x 600 pixeles, y permite cargar (al establecer webPreferences.contextIsolation en true)
 * el archivo de configuración ./preload.js.
 */
function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      preload: path.resolve(app.getAppPath(), 'preload.js')
    },
  });
  mainWindow.maximize();
  /**
   * Cuando la aplicación este en producción se cargara el archivo dist/index.html,
   * y durante el proceso de desarrollo se estará cargando el archivo desde localhost,
   * por el puerto 8080.
   */
  //mainWindow.loadFile(path.join(__dirname, "dist", "index.html"));
  mainWindow.loadURL("http://localhost:8080");
}

/**
 * Cuando el proceso main se ha cargado completamente, se va llamar a la función createWindow
 * para que en este punto se empiece a mostrar la ventana.
 */
app.whenReady().then(createWindow);

/**
 * Cuando todas las ventanas (o procesos de render) finalicen, el proceso main también debe de
 * finalizar, con la excepción de que en macOS el proceso main no debe finalizar, es por esto que
 * se utiliza if(procces.platform !== "darwin") para lograr este objetivo.
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/**
 * El evento activate solo sucede en macOS, las ventanas de vuelven a crear.
 */
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

/**
 * ipcMain maneja los mensajes enviados desde los procesos de render,
 * en este caso cuando un proceso de render lance el evento 'get:node',
 * se debe de ejecutar el callback pasado al método ipMain.on.
 */
ipcMain.on('get:node', (_, node) => {
  /**
    * Las acciones realizadas por este callback son:
    * traer de la base de datos el registro que tenga la propiedad node
    * igual al valor de la variable node pasada al callback (enviado desde
    * el proceso de render) y se envia este regitro al proceso de render principal
    * con la instrucción: mainWindow.webContents.send('send:data', row), el proceso
    * de render lo puede recibir registrando un callback para que escuche el evento
    * 'send:data'.
    */
  db.get('SELECT * FROM characters WHERE node=?', [node], (err, row) => {
    if(err) {
      return console.log(err.message);
    }
    mainWindow.webContents.send('send:data', row);
  });
});