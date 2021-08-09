const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

var callCounter = 0;
myEmitter.on('addFunctionCalled', () => {
  callCounter = callCounter + 1;
});

function stringCalculator(string1, funcCounter = false) {
  if (funcCounter) {
    myEmitter.emit('addFunctionCalled');
  }
  
  try {
    let formattedString = string1.replace(/[a-zA-Z]/g, '');
    formattedString = formattedString.split(/[+,.*%\\/\n;\{\}\[\]]/) 
    
    let array1 = formattedString && formattedString.length > 0
      ? formattedString.map(item => item && item.length > 0
        ? typeof Number(item) === 'number' ? Number(item) : 0
        : 0)
      : 0;
    
    let negativeArray = [];
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
      array.reduce((acc, curr) => curr <= 1000 ? acc += curr : acc, 0) : 0;
    
    return sum1;

  } catch (error) {
    console.log(`\t${error.message}. Negative Value(s): ${error.values}`);
    return error.message;
  }

}

function getFunctionCount(count = 0) {
  for (let i = 0; i < count; i++){
    stringCalculator('', true);
  }
  return callCounter;
}

module.exports.getFunctionCount = getFunctionCount;
module.exports.stringCalculator = stringCalculator;
