const { ipcRenderer } = require('electron')
const fs = require('fs')

class FileManager {
    constructor({editor}) {
        this.editor = editor
        ipcRenderer.on('open-file', (e, url) => this.openFile(url))
    }

    openFile(url) {
        console.log(url)
        fs.readFile(url, 'utf-8', (err, data) => {
            this.editor.setModel(monaco.editor.createModel(data, 'javascript'))
        })
    }
}

module.exports = FileManager