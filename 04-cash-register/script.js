const input = document.querySelector("#cash");
const purchaseBtn = document.querySelector("#purchase-btn");
const changeDue = document.querySelector("#change-due");
let price = 3.26;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
];

const calcChange = () => {
  let change = input.value - price;
  const totalUnit = cid
    .map((item) => item[1])
    .reduce((accmulator, curVal) => accmulator + curVal, 0);

  if (change > totalUnit) {
    return "Status: INSUFFICIENT_FUNDS";
  }

  if (change === totalUnit) {
    return `Status: CLOSED ${cid
      .filter((item) => item[1] !== 0)
      .map((item) => `${item[0]}: $${item[1].toFixed(2)}`)}`;
  }

  if (change < totalUnit) {
    let nominal = {
      PENNY: 0.01,
      NICKEL: 0.05,
      DIME: 0.1,
      QUARTER: 0.25,
      ONE: 1,
      FIVE: 5,
      TEN: 10,
      TWENTY: 20,
      "ONE HUNDRED": 100,
    };

    let result = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      const unitAvailable = cid[i][1] / nominal[cid[i][0]];
      const unitNeeded = Math.floor(change / nominal[cid[i][0]]);
      const takeUnitNeeded = Math.min(unitAvailable, unitNeeded);

      if (takeUnitNeeded > 0) {
        const valueMoneyNeeded = takeUnitNeeded * nominal[cid[i][0]];
        cid[i][1] -= valueMoneyNeeded;
        change = Math.round((change - valueMoneyNeeded) * 100) / 100;

        result.push(`${cid[i][0]}: $${valueMoneyNeeded.toFixed(2)}`);
      }
    }

    if (change > 0) {
      return "Status: INSUFFICIENT_FUNDS";
    }

    return `Status: OPEN ${result.join(" ")}`;
  }
};

const submit = () => {
  if (input.value < price) {
    alert("Customer does not have enough money to purchase the item");
    return;
  }

  if (input.value == price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
    return;
  }

  if (input.value > price) {
    changeDue.innerText = calcChange();
  }
};

purchaseBtn.addEventListener("click", submit);
