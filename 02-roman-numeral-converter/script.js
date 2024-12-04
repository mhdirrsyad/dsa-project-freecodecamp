const inputNum = document.querySelector("#number");
const convertBtn = document.querySelector("#convert-btn");
const result = document.querySelector("#output");
const resultContainer = document.querySelector(".result-container");

const converter = (num) => {
  const roman = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  let str = "";
  for (let i = 0; i < roman.length; i++) {
    if (num >= roman[i][1]) {
      num -= roman[i][1];
      str += roman[i][0];
      i--;
    }
  }

  return str;
};

const submit = (e) => {
  e.preventDefault();

  if (!inputNum.value) {
    resultContainer.style.backgroundColor = "#3B1C32";
    result.innerText = "Please enter a valid number";
    return;
  }

  if (inputNum.value <= 0) {
    resultContainer.style.backgroundColor = "#3B1C32";
    result.innerText = "Please enter a number greater than or equal to 1";
    return;
  }

  if (inputNum.value >= 4000) {
    resultContainer.style.backgroundColor = "#3B1C32";
    result.innerText = "Please enter a number less than or equal to 3999";
    return;
  }

  resultContainer.style.backgroundColor = "transparent";
  result.innerText = converter(inputNum.value);
};

convertBtn.addEventListener("click", submit);
