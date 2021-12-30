module.exports = function toReadable(num) {
  let samples = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
  };
  let characters = String(num).length;
  let result;

  let getReadble2 = function () {
    num < 20 ? result = samples[num] :
      num % 10 === 0 ? result = samples[num] :
        result = samples[Math.floor(num / 10) * 10] + " " + samples[num % 10];
  };

  let getReadble3 = function () {
    let twoDigitNumber;
    let twoDigitString;
    if (num % 100 === 0) {
      result = `${samples[num / 100]} hundred`;
    } else {
      twoDigitNumber = num - Math.floor(num / 100) * 100;
      twoDigitNumber < 20 ? twoDigitString = samples[twoDigitNumber] :
        twoDigitNumber % 10 === 0 ? twoDigitString = samples[twoDigitNumber] :
          twoDigitString = samples[Math.floor(twoDigitNumber / 10) * 10] + " " + samples[twoDigitNumber % 10];

      result = `${samples[Math.floor(num / 100)]} hundred ${twoDigitString}`;
    }
  };

  let getReadble1 = function () {
    result = samples[num];
  };

  characters === 3 ? getReadble3(num) :
    (characters === 2) ? getReadble2(num) :
      (characters === 1) ? getReadble1(num) :
        console.log("Не верный формат");

  return result;
}

