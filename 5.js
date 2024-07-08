const { writeFile } = require("fs");
const readFileAsync = require("./3");
 
readFileAsync('output.txt', (content1)=>{
    const modefiedContext1 = content1 + "\nFirst";

    writeFile('output1.txt', modefiedContext1, ()=>{
        readFileAsync('output1.txt', (content2)=>{
            const modefiedContext2 = content2 + "\nTwo";

            writeFile('output2.txt', modefiedContext2, ()=>{
                readFileAsync('output2.txt', (finalRead)=>{
                    console.log(`${finalRead}\n`)
                })
            })

        })
    })
})
