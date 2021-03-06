const { BrowserWindow, app } = require('electron')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({})
    mainWindow.loadURL(`file://${__dirname}/index.html`)


    mainWindow.webContents.on('will-navigate', (e, url) => {
        e.preventDefault()
        console.log(url)

        mainWindow.webContents.send('open-file', url.slice(8))
    })
})