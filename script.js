const bouton = document.querySelector("input");
const tarifBasic = document.querySelector(".tarifbasique");
const tarifProfessional = document.querySelector(".tarifprofessional");
const tarifMaster = document.querySelector(".tarifmaster");
const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");
const centre = document.querySelector(".centre");
const title = document.querySelector("h1");


let pricing = "month";

bouton.addEventListener("click", function(){
    if (pricing === "month"){
        tarifBasic.innerHTML = "$199.99";
        tarifBasic.style.transform = "rotateY(-360deg) scale(1.3)";
        tarifBasic.style.transition ="transform 1s";
        tarifProfessional.style.transform = "rotateY(-360deg) scale(1.3)";
        tarifProfessional.style.transition ="transform 1s";
        tarifMaster.style.transform = "rotateY(-360deg) scale(1.3)";
        tarifMaster.style.transition ="transform 1s";
        tarifProfessional.innerHTML = "$249.99";
        tarifMaster.innerHTML = "$399.99";  
        pricing = "year";
    }

    

    else {
        tarifBasic.innerHTML = "$19.99";
        tarifBasic.style.transform = "rotateY(360deg)";
        tarifBasic.style.transition ="transform 1s";
        tarifProfessional.style.transform = "rotateY(360deg)";
        tarifProfessional.style.transition ="transform 1s";
        tarifMaster.style.transform = "rotateY(360deg)";
        tarifMaster.style.transition ="transform 1s";
        tarifProfessional.innerHTML = "$24.99";
        tarifMaster.innerHTML = "$39.99"; 
        pricing = "month";

    }    
})