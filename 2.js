function filterEvenNumbers (numbers, callback){
    return numbers.filter(callback);
}
let numbers = [1,2,3,4,5,6,7,8,9];
const evenNUmber = filterEvenNumbers(numbers, num => num % 2 == 0);
console.log(evenNUmber)