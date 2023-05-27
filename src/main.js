"use strict";
const withdrawP = document.querySelector(".withdraw-popup");
const transferP = document.querySelector(".transfer-popup");
const exchangeP = document.querySelector(".exchange-popup");
const withdrawBtn = document.getElementById("withdrawMoney");
const transferBtn = document.getElementById("transferMoney");
const exchangeBtn = document.getElementById("exchangeMoney");
const popUps = document.querySelector(".popUps");
const currentMoney = document.getElementById("balance");
currentMoney.innerHTML = `$20, 000.00`;
const withdrawal = document.getElementById("withdraw");
withdrawBtn === null || withdrawBtn === void 0 ? void 0 : withdrawBtn.addEventListener("click", () => {
    withdrawP.style.visibility = "visible";
    popUps.insertBefore(withdrawP, popUps.firstChild);
});
withdrawal === null || withdrawal === void 0 ? void 0 : withdrawal.addEventListener("click", () => {
    const withdrawMoney = document.getElementById("amountToWithdraw");
    if (currentMoney.innerHTML > Number(withdrawMoney.value)) {
        currentMoney.innerHTML -= withdrawMoney;
    }
    else {
        return;
    }
});
transferBtn === null || transferBtn === void 0 ? void 0 : transferBtn.addEventListener("click", () => {
    transferP.style.visibility = "visible";
    popUps.insertBefore(transferP, popUps.firstChild);
});
exchangeBtn === null || exchangeBtn === void 0 ? void 0 : exchangeBtn.addEventListener("click", () => {
    exchangeP.style.visibility = "visible";
    popUps.insertBefore(exchangeP, popUps.firstChild);
});
