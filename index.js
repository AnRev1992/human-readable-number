function toReadable(num) {
  let samples = {
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
    17: "seventen",
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

  let getReadble3 = function () {
    console.log("тест");
  };



  characters === 3 ? getReadble3(num) :
    (characters === 2) ? getReadble2(num) :
      (characters === 1) ? getReadble1(num) :
        "Не верный формат";
}

toReadable(132);