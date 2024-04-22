let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let message = document.querySelector(".message");
let newBtn = document.querySelector("#new-btn");  
let victory = document.querySelector(".victory-msg");  

let turnO = true; //We have Player0 and PlayerX
let noOfBoxClicked = 0;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const newGame = ()=>{
    turnO = true;
    enableBoxes();
    victory.classList.add("hidden");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        if(turnO ===true){
            box.innerText = "O"
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        noOfBoxClicked++;
        checkWinner();
        if(noOfBoxClicked == 9){
            victory.classList.remove("hidden");
            message.innerText = "Its a Draw";

        }
    })
});

const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1 !== "" && posVal2 !== "" && posVal3 !== ""){
            if(posVal1 === posVal2 && posVal2 == posVal3){
                disableBoxes(); 
                printWinner(posVal1);
            }
        }
    }
    
}

const disableBoxes = ()=>{
    boxes.forEach((box=>{
        box.disabled = true;
    }))
}

const enableBoxes = ()=>{
    boxes.forEach((box=>{
        box.disabled = false;
        box.innerText = "";
    }))
}

const printWinner = (winner)=>{
    message.innerText = `Winner is Player ${winner}`;
    victory.classList.remove("hidden");
}

newBtn.addEventListener("click",newGame);
resetBtn.addEventListener("click",newGame);