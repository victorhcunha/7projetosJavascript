document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd)
});

document.querySelectorAll(".area").forEach(item => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("drop", drop)
});

//functions item
function dragStart(e){
    e.currentTarget.classList.add("dragging")
}
function dragEnd(e){
    e.currentTarget.classList.remove("dragging")
}

//functions area
function dragOver(e){
    e.preventDefault();
    e.currentTarget.classList.add("hover");
}
function dragLeave(e){
    e.currentTarget.classList.remove("hover");

}
function drop(){}