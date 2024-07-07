const fs = require("fs");

// read output.txt
function readContext(filepath, callback) {
  fs.readFile(filepath, "utf8", (error, data) => {
    if (error) {
      console.log("Error reading", error);
      return;
    }
    callback(data);
  });
}

// write output1.txt
function writeContext(filepath, context, callback) {
  fs.writeFile(filepath, context, "utf-8", (error) => {
    if (error) {
      console.log("Error writing", error);
      return;
    }
  });
  callback();
}

// implement
readContext("output.txt", (context1) => {
  const modefiedContext1 = context1;

  writeContext("output1.txt", modefiedContext1, () => {
    readContext("output1.txt", (context2) => {
      const modefiedContext2 = context2;

      writeContext("output2.txt", modefiedContext2, () => {
        readContext("output2.txt", (finalRead) => {
          console.log("Final Read from output2.txt: ", finalRead);
        });
      });
    });
  });
});
