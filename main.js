const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({width: 800, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.on('closed', function() {
    mainWindow =null;
  });
});
