const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();


let callCounter = 0;

myEmitter.on('addFunctionCalled', () => {
  callCounter = callCounter + 1;
});


function stringCalculator(string1) {

  myEmitter.emit('addFunctionCalled');

  try {
    let array1 = string1.match(/[+-]?\d+(?:\.\d+)?/g);
    console.log(array1);
    // let formattedString = string1.replace(/[a-zA-Z]/g, '');
    // formattedString = formattedString.split(/[,.*%\\/\n;\{\}\[\]]/) 

    // let array1 = formattedString && formattedString.length > 0
    //   ? formattedString.map(item => item && item.length > 0
    //     ? typeof Number(item) === 'number' &&
    //       (Number(item) > 0 || Number(item) < 0) ? Number(item) : 0
    //     : 0)
    //   : 0;
    
    let negativeArray = []; // n
    let array = array1.map(item => {
      if (item < 0) {
        negativeArray.push(item);
        return item;
      }
      else if (item > 0) {
        return item;
      }
    });

    if (negativeArray && negativeArray.length > 0) {
      let err = new Error();
      err["message"] = "negatives not allowed";
      err["values"] = negativeArray.join(', ');
      throw err;
    }

    let sum1 = array && array.length > 0 ?
      array.reduce((acc, curr) => curr <= 1000 ? acc += Number(curr) : acc, 0) : 0;

    return sum1;

  } catch (error) {
    console.log(`${error.message}. Value(s): ${error.values}`);
    return;
  }

}

stringCalculator('+1;--2/-4swati***1000');
stringCalculator('//[**][%%]\n1**2%%3');
console.log(stringCalculator('//[**][%%]\n1**2%%3'));
// stringCalculator('//[*][%]\n1*2%3');

// for (let i = 0; i < 5; i++) console.log("Sum: ", stringCalculator('//;\n1;2'));

console.log(`Counter: ${callCounter}`);




