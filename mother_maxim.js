let win = 0;
let win_pc = 0;
let max = 5;
let live = 0;
const randomInt = Math.floor(Math.random() * max) + 1;
while(live <= 10){
    const choisec = prompt("input tour number:");
    if (choisec == "correct"){
        const newMAx = +prompt();
        max = newMAx
        continue
    }
    if(Number(choisec) === randomInt){
        win = win +1
        alert(`Victory!`)
        break  
        
    }
    else if (choisec === "exit"){
        break
    }
    else{
        win_pc = win_pc +1
        alert(`Lose:( pc wins: ${win_pc} realy number ${randomInt}, your wins: ${win} win pc: ${win_pc}`)
        live++
    }

}
