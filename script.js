let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")
let newgamebtn  = document.querySelector("#newbtn")
let msgcont = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turno = true; //player o,player x
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],[3,4,5],[6,7,8]
];

//function to enable all tbns
const enableBtns = () =>{
    for(let box of boxes){
       box.disabled = false;
       box.innerText = "";
    }
};
//function to reset the game
const resetGame = () =>{
    turno = true;;//call enable btns
    enableBtns();
    //msg container ko hide
    msgcont.classList.add("hide");
    
}



//event listener add on boxes
boxes.forEach((box) =>{ //foreach loop to add event listener to all 9 boxes
    box.addEventListener("click", () =>{
        console.log("clicked");
        if(turno){ //playe o turn
            box.innerText = "O";
            turno =false;
        }
        else{ //player x turn to print x and turno ko krdo false yani ab o ki turn aygii
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        
        checkWinner() ; //function to check if player won 
    });
});


//function to disable btns after 1 winner
const disableBtns = () =>{
     for(let box of boxes){
        box.disabled = true;
     }
};



//function to show the winner
const showWinner = (winner) =>{
    msg.innerText = `congratulations!,winner is ${winner}`; 
    msgcont.classList.remove ("hide"); 
    disableBtns(); // call to disable boxes
};
const checkWinner = () =>{
    for(let pattern of winpatterns){
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if(pos1value!="" && pos2value!="" && pos3value!=""){ //winning condition if tino box empty h to winner nii hoskta
            if(pos1value==pos2value && pos2value==pos3value){ //if tino m value same h to hi winner hoga
                console.log("winner",pos1value);
                showWinner(pos1value);
            }
    }
    }
};
//kab call hoga reset btn
newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
