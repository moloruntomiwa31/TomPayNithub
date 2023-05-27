const withdrawP: any = document.querySelector(".withdraw-popup")
const transferP: any = document.querySelector(".transfer-popup")
const exchangeP: any = document.querySelector(".exchange-popup")
const withdrawBtn = document.getElementById("withdrawMoney")
const transferBtn = document.getElementById("transferMoney")
const exchangeBtn = document.getElementById("exchangeMoney")
const popUps: any = document.querySelector(".popUps")
const currentMoney: any = document.getElementById("balance")
currentMoney.innerHTML = `$20, 000.00`
const withdrawal = document.getElementById("withdraw")

withdrawBtn?.addEventListener("click", () => {
    withdrawP.style.visibility = "visible"
    popUps.insertBefore(withdrawP, popUps.firstChild);
})
withdrawal?.addEventListener("click", () => {
    const withdrawMoney: any = document.getElementById("amountToWithdraw")
    if (currentMoney.innerHTML > Number(withdrawMoney.value)) {
        currentMoney.innerHTML -= withdrawMoney
    }
    else {
        return
    }
})
transferBtn?.addEventListener("click", () => {
    transferP.style.visibility = "visible"
    popUps.insertBefore(transferP, popUps.firstChild);
})
exchangeBtn?.addEventListener("click", () => {
    exchangeP.style.visibility = "visible"
    popUps.insertBefore(exchangeP, popUps.firstChild);
})