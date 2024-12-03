const checkBtn = document.querySelector("#check-btn");
const input = document.querySelector("#text-input");
const result = document.querySelector("#result");

const checkPalindrome = (str) => {
  const inputStr = str.toLowerCase().replaceAll(/[-+.^:,_()\s\\/]/g, "");
  const inputStrRev = [...inputStr].reverse().join("");
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
