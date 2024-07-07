const { error } = require('node:console');
const fs = require('node:fs');
function writeFile(filepath, context, callback) {

    fs.writeFile(filepath, context, 'utf-8', (error)=>{
        if (error) {
            console.log("Error writing file", error);
            return
        }
    })
    callback();
}
writeFile('output.txt', 'Hello world!🦖', ()=>{
    console.log("File written.")
})