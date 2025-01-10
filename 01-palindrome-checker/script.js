const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");

// Regex
// const checkPalindrome = (str) => {
//   const inputStr = str.toLowerCase().replaceAll(/[-+.^:,_()\s\\/]/g, "");
//   const inputStrRev = [...inputStr].reverse().join("");
//   return inputStr === inputStrRev;
// };

// Stack
const checkPalindrome = (str) => {
  const stack = [];
  const inputStr = str.toLowerCase().replace(/[-+.^:,_()\s\\/]/g, "");

  // Memasukkan setiap karakter ke stack
  for (let char of inputStr) {
    stack.push(char);
  }

  // Reverse karakter dari stack
  let inputStrRev = "";
  while (stack.length > 0) {
    inputStrRev += stack.pop();
  }

  return inputStr === inputStrRev;
};

const submit = (e) => {
  e.preventDefault();

  if (!input.value) {
    alert("Please input a value");
    return;
  }

  if (checkPalindrome(input.value)) {
    result.innerText = `${input.value} is a palindrome.`;
  } else {
    result.innerText = `${input.value} is not a palindrome.`;
  }
};

checkBtn.addEventListener("click", submit);
