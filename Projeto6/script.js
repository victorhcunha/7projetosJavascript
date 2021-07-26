//inicial data
let currentQuestion = 0;

showQuestion();

//functions
function showQuestion(){
    if(questions[currentQuestion]){
        let q = questions[currentQuestion]

        document.querySelector(".scoreArea").style.display = "none";
        document.querySelector(".questionArea").style.display = "block";

        document.querySelector(".question").innerHTML = q.question;
        document.querySelector(".options").innerHTML = "";

        let optionsHtml = "";
        for(let i in q.options){
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector(".options").innerHTML = optionsHtml;

        document.querySelectorAll(".options .option").forEach(item => {
            item.addEventListener("click", optionsClickEvent);
        });


    }else{

    }

}


function optionsClickEvent(e){
    let clickedOption = parseInt(e.target.getAttribute("data-op"));

    if (questions[currentQuestion].answer == clickedOption){
        console.log("Acertou")
    }
}