let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset-game");
let newGameBtn = document.querySelector(".new-game");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true; //PlayerX or PlayerO
let count = 0;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {
        console.log("Box clicked");
        console.log(count);
        if (turno) {
            box.innerHTML = "X";
            box.style.color = "black";
            turno = false;
        }
        else {
            box.innerHTML = "O";
            box.style.color = "red";
            turno = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }

    });
}
)

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgCont.classList.remove("hide");
    disableBox();
}

const resetGame = () => {
    turno = true;
    count = 0;
    enableBox();
    msgCont.classList.add("hide");
}

const disableBox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}
const showWinner = (winner) => {

    msg.innerHTML = `Congratulations the winner is ${winner}`;
    msgCont.classList.remove("hide");
    disableBox();
}

const checkWinner = () => {

    for (let pattern of winPatterns) {
        // console.log(pattern[0]);
        //console.log(boxes[pattern[0]].innerHTML,boxes[pattern[1]],boxes[pattern[2]]);
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)

resetButton.addEventListener("click", resetGame)
