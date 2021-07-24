document.body.addEventListener("keyup", (event)=>{
    playsound(event.code.toLowerCase() );
})

function playsound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement) {
        audioElement.currentTim = 0;
        audioElement.play();
    }

    if(keyElement) {
        keyElement.classList.add("active");
        setTimeout(()=>{
            keyElement.classList.remove("active")
        }, 300)
    }
}