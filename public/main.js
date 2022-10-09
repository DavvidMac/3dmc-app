const { app, BrowserWindow } = require("electron");

let win = null;

const path =require('path')
const isDev=require('electron-is-dev');
const { url } = require("inspector");

require ('@electron/remote/main').initialize()

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(
    isDev
    ? 'http://localhost:3000'
    : `file://${path.join(__dirname,'../build/index.html')}`)
}

app.whenReady().then(createWindow);
;