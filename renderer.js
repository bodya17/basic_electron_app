const loader = require('monaco-loader')
const Filemanager = require('./filemanager')

loader().then(monaco => {
    let editor = monaco.editor.create(document.querySelector('#container'), {
        language: 'javascript',
        theme: 'vs-dark',
        automaticLayout: true
    })

    let fm = new Filemanager({editor})
})