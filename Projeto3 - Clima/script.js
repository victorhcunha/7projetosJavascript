document.querySelector(".busca").addEventListener("submit", (event) =>{
    event.preventDefault();

    let input = document.querySelector("#searchInput").nodeValue;

    if (input !== ""){
        showWarning("Carregando...")
    }
})

function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg
}