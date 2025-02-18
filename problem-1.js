function cashout(money){
    const cashoutCharge = 0.0175;
    if(typeof money !== "number" || money < 0){
        return "Invalid";
    }else{
        return(money * cashoutCharge)
    }
}

console.log(cashout(2000))
console.log(cashout(100))
console.log(cashout(999))
console.log(cashout(-350))
console.log(cashout(0))
console.log(cashout("101"))
console.log(cashout("mewauu"))