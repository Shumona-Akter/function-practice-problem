/* 
Write a function that will take hour as the input parameter and will
convert it into minutes and will return the result in minutes.
 */

function time(hour){
    const minutes = hour * 60;
    return minutes
}

const myOur = time(3);
console.log(myOur);

/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result.
 */

function findLeapYear(year){
    const array = []  ;

    for (let i = 0; i < year.length; i++){
        const index = [i];
        const element = year[index];

    
        if(element % 4 === 0){
            array.push(element)
        }
  }
  return array

}
const myYear = findLeapYear([2023,2024,2025,2028,2030]);
console.log(myYear);

/* 
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
as the input parameter and will return the sum of the odd numbers.
 */
function findOddSum(numbers){
    let sum = 0;
    for (let i = 0; i <numbers.length ; i++){
        const index = [i];
        const element = numbers[index]
        if ( element % 2 !== 0){
          sum = sum + element;  
        }
    }
    return sum
}


const odd = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(odd)