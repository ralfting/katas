(function(){
  "use strict";

  function averageString(str) {
    const arrayOfNumbers = str.split(" ");
    const sumOfNumbers = arrayOfNumbers.reduce((sum, value) => {
      let current = _convertNumberValue(value, false)

      return sum += current;
    }, 0);

    let average = sumOfNumbers / arrayOfNumbers.length;
    let numberTruncate = Math.trunc(average);

    return _convertNumberValue(numberTruncate, true);
  }

  function _convertNumberValue(number, isNumber) {
    let numberConvert;
    let numberReturn = "n/a";
    const BY_KEY = 0;
    const BY_VALUE = 1;
    const mapOfNumbers = [
      ["zero", 0], ["one", 1], ["two", 2], ["three", 3], ["four", 4],
      ["five", 5], ["six", 6], ["seven", 7], ["eight", 8], ["nine", 9]
    ];

    let toCompare = BY_KEY;
    let toReturn = BY_VALUE;

    if (isNumber) {
      toCompare = BY_VALUE;
      toReturn = BY_KEY;
    }

    mapOfNumbers.forEach((element) => {
      if (element[toCompare] === number) {
        numberReturn = element[toReturn];
      }
    });

    return numberReturn;
  }


  console.log(averageString("two five"));
}());
