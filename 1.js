function processArray (numbers, callback){
    return numbers.map(callback);
}
let numbers = [1,4,3,1,5]
const square = processArray(numbers, num => num * num);
console.log(square)