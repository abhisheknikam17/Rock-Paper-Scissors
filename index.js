
let computerMove = ""
let result = ""
let resultEl = document.getElementById("result-el")
// resultEl.textContent= "Hellow World"
function rock(){
    let randomOption = Math.floor(Math.random() * 3) + 1
    if(randomOption === 1 && randomOption<2){
         computerMove="Rock"
    } else if(randomOption === 2 && randomOption < 3){
         computerMove="Paper"
    }else {
         computerMove="Scissors"
    }
    
    if(computerMove==="Rock"){
        result= "It's a Tie" 
}else if(computerMove==="Paper"){
    result = "You Lose"
}else if(computerMove==="Scissors"){
    result= "You Win"
}
resultEl.textContent = `You picked Rock. Computer Picked ${computerMove}. ${result}`
    // console.log(computerMove)
}

function paper(){
    let randomOption = Math.floor(Math.random() * 3) + 1
    if(randomOption === 1 && randomOption<2){
         computerMove="Rock"
    } else if(randomOption === 2 && randomOption < 3){
         computerMove="Paper"
    }else {
         computerMove="Scissors"
    }
    
    if(computerMove==="Rock"){
        result= "You Win" 
}else if(computerMove==="Paper"){
    result = "It's a Tie"
}else if(computerMove==="Scissors"){
    result= "You Lose"
}
resultEl.textContent = `You picked Paper. Computer Picked ${computerMove}. ${result}`
    // console.log(computerMove)
}


function scissors(){
    let randomOption = Math.floor(Math.random() * 3) + 1
    if(randomOption === 1 && randomOption<2){
         computerMove="Rock"
    } else if(randomOption === 2 && randomOption < 3){
         computerMove="Paper"
    }else {
         computerMove="Scissors"
    }
    
    if(computerMove==="Rock"){
        result= "You Lose" 
}else if(computerMove==="Paper"){
    result = "You Win"
}else if(computerMove==="Scissors"){
    result= "It's a Tie"
}
resultEl.textContent = `You picked Scissors. Computer Picked ${computerMove}. ${result}`
    // console.log(computerMove)
}
