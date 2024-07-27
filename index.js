import electron from 'electron';
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
import  path from 'path';
import  url from 'url'; 
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let win;

function createWindow(){
    win = new BrowserWindow({
        width: 1200,
        height: 700,
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file',
        slashes: true,
    }));

    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow)

app.on('win-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
})

app.on('activate', () => {
    if(win === null){
        createWindow();
    }
})

