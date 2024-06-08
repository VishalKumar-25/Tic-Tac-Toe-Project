let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;

const winPat=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if (turnO) {
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disablebox=()=>{
    for (let box of boxes) {
        box.disabled=true;
    }
}

const enablebox=()=>{
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
    msgcont.classList.add("hide");
}

const showwinner=(winner)=>{
    msg.innerText=`WINNER ${winner}`;
    msgcont.classList.remove("hide"); 
    disablebox();
}
const checkWinner=()=>{
    for (pat of winPat) {
        let pos1val=boxes[pat[0]].innerText;
        let pos2val=boxes[pat[1]].innerText;
        let pos3val=boxes[pat[2]].innerText;
        
        if (pos1val!="" && pos2val!="" && pos3val!="") {
            if (pos1val==pos2val &&pos2val==pos3val) {
                showwinner(pos1val);
            }
        }
    }
};

const resetgame=()=>{
    turnO=true;
    enablebox();

}

resetbtn.addEventListener("click",resetgame);