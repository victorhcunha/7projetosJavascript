document.querySelector(".busca").addEventListener("submit", async(event) =>{
    event.preventDefault();

    let input = document.querySelector("#searchInput").value;

    if (input !== ""){
        showWarning("Carregando...")
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=f84d8a70df14d76d249ef792d72d086d&units=metric&lang=pt_br`;
        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200){

        }else{
            showWarning("Cidade não encontrada")
        }

        console.log(json)
    }
})

function showWarning(msg){
    document.querySelector(".aviso").innerHTML = msg
}