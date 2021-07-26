//inicial data
let currentColor = "black";
let canDraw = false;

let mouseX = 0;
let mousey = 0;

let screen = document.querySelector("#tela");
let ctx = screen.getContext("2d");

//events
document.querySelectorAll(".colorArea .color").forEach(item => {
    item.addEventListener("click", colorClickEvent)
});
screen.addEventListener("mousedown", mouseDownEvent);
screen.addEventListener("mousemove", mouseMoveEvent);
screen.addEventListener("mouseup", mouseUpEvent);


//functions
function colorClickEvent(e){
    let color = e.target.getAttribute("data-color");
    currentColor = color;

    document.querySelector(".color.active").classList.remove("active");
    e.target.classList.add("active");
}

function mouseDownEvent(){
    canDraw = true;
    mouseX = e.pageX - screen.offsetLeft;
    mouseY = e.pageY - screen.offsetTop;
}

function mouseMoveEvent(e){
    if(canDraw){
        canDraw(e.pageX, e.pageY)
    }

}

function mouseUpEvent(){
    canDraw = false
}

function drawn(x,y){
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX,mousey);
    ctx.lineTo(mouseX,mousey)
    ctx.closePAth();
    ctx.strokeStyle = currentColor
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}