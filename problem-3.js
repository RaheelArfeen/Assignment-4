function electionResult(votes){
    if(!Array.isArray(votes)){
        return "Invalid";
    }

    let mangoVote = 0;
    let bananaVote = 0;

    for(let i = 0; i < votes.length; i++){
        if(votes[i] === "mango"){
            mangoVote++;
        }else if(votes[i] === "banana"){
            bananaVote++;
        }
    }

    if(mangoVote > bananaVote){
        return "Mango"
    }else if(bananaVote > mangoVote){
        return "Banana";
    }else{
        return "Draw";
    }
}

console.log(electionResult(["mango", "banana", "mango", "banana", "mango"]));
console.log(electionResult([]));
console.log(electionResult(["mango", "banana", "jaker party", "no"]));
console.log(electionResult(["mango"]));
console.log(electionResult(["banana", "banana", "age e valo chilam", "no"]));
console.log(electionResult({result: "mango , banana ,  mango"}))
console.log(electionResult("mango , banana"));
console.log(electionResult(["mango", "BananA", "na vote", "na vote"]));