// Inicial data
let square = {
    a1: "", a2: "", a3:"",
    b1: "", b2: "", b3:"",
    c1: "", c2: "", c3:"",
};
let player = "";
let warning = "";
let playing = false;

// Events
reset()
document.querySelector(".reset").addEventListener("click", reset);
document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", itemClick)
})

// Functions
function itemClick(event){
    let item = event.target.getAttribute("data-item")
    if(square[item] === ""){
        square[item] = player;
        renderSquare();
        togglePlayer();
    }
}

function reset(){
    warning = "";

    let random = Math.floor(Math.random() * 2);
    if(random === 0 ){
        player = "x"
    }else{
        player = "o" 
    }

    for(i in square){
        square[i] = "";
    }

    playing = true;
    renderSquare();
    renderInfo();
}

function renderSquare(){
    for(let i in square){
        console.log("ITEM: ", i);
        let item = document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = square[i]
    };

    checkGame();
}

function renderInfo(){
    document.querySelector(".vez").innerHTML = player;
    document.querySelector(".resultado").innerHTML = warning  
}

function togglePlayer(){
    if(player === "x"){
        player = "o"
    }else{
        player = "x"
    };
    renderInfo();
}

function checkGame(){
    if(checkWinnerFor("x")){
        warning = "Vitória do X";
        playing = false
    }else if(checkWinnerFor("o")){
        warning = "Vitória do O";
        playing = false
    }else if(isFull()){
        warning = "Empate";
        playing = false
    }
}

function checkWinnerFor(player){
    let pos = [
        "a1,a2,a3",
        "b1,b2,b3",
        "c1,c2,c3",

        "a1,b1,c1",
        "a2,b2,c2",
        "a3,b3,c3",

        "a1,b2,c3",
        "a3,b2,c1"
    ];

    for(let w in pos){
        let pArray = pos[w].split(",");
        let hasWin = pArray.every((option)=>{
                if(square[option] === player){
                    return true
                }else{
                    return false
                }
        })
        if(hasWin){
            return true;
        }
    }

    return false;
}