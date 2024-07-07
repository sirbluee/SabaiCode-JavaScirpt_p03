const fs = require('node:fs');
function readFileAsync(filepath, callback){
    fs.readFile(filepath, 'utf-8', (error, data) => {
        if (error){
            console.log("Error reading file", error);
            return;
        }
        callback(data)
    })
}
readFileAsync('input.txt', (data)=>{
    return console.log(data);
})

