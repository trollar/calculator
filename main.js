/*
    Calculator entry point
*/

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const window = new BrowserWindow(
        {
            width: 800,
            height: 600,
            autoHideMenuBar: true,
        }
    )

    window.loadFile('index.html')
}