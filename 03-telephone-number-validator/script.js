const input = document.querySelector("#user-input");
const checkBtn = document.querySelector("#check-btn");
const clearBtn = document.querySelector("#clear-btn");
const result = document.querySelector("#results-div");

const inputValidator = (num) => {
  const regex = /^1?\s?(\d{3}|\(\d{3}\))[-\s]?\d{3}[-\s]?\d{4}$/;
  return regex.test(num);
};

const submit = (e) => {
  e.preventDefault();

  if (!input.value) {
    alert("Please provide a phone number");
  }

  if (inputValidator(input.value)) {
    result.innerText = `Valid US number: ${input.value}`;
  } else {
    result.innerText = `Invalid US number: ${input.value}`;
  }
};

const clear = () => {
  result.innerText = "";
};

checkBtn.addEventListener("click", submit);
clearBtn.addEventListener("click", clear);
