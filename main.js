/*
    Calculator entry point
*/

const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const window = new BrowserWindow(
        {
            width: 400,
            height: 600,
            autoHideMenuBar: true,
            webPreferences: {
                preload: path.join(app.getAppPath(), 'preload.js')
            },
            icon: 'assets/icon.png'
        }
    )

    window.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})