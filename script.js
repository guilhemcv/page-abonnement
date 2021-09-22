const bouton = document.querySelector("input");
const tarifBasic = document.querySelector(".tarifbasique");
const tarifProfessional = document.querySelector(".tarifprofessional");
const tarifMaster = document.querySelector(".tarifmaster");
const gauche = document.querySelector(".gauche");
const droite = document.querySelector(".droite");
const centre = document.querySelector(".centre");
const title = document.querySelector("h1");
const texte = document.querySelector("p");

let pricing = "month";

bouton.addEventListener("click", function(){
    if (pricing === "month"){
        tarifBasic.innerHTML = "$199,99";
        tarifProfessional.innerHTML = "$249,99";
        tarifMaster.innerHTML = "$399,99";
        gauche.style.backgroundColor = "#F7DB69";
        gauche.style.color = "#3B185F";
        droite.style.backgroundColor = "#F7DB69";
        droite.style.color = "#3B185F";
        centre.style.backgroundColor = "#3B185F";
        document.body.style.backgroundColor = "#A12568";   
        title.style.color = "#F7DB69" ;
        texte.style.color = "#F7DB69";
        pricing = "year";
    }

    

    else {
        tarifBasic.innerHTML = "$19,99";
        tarifProfessional.innerHTML = "$24,99";
        tarifMaster.innerHTML = "$39,99"; 

       
        pricing = "month";

    }    
})