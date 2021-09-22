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
        tarifBasic.innerHTML = "$199,99";
        tarifProfessional.innerHTML = "$249,99";
        tarifMaster.innerHTML = "$399,99";
       /*  gauche.style.backgroundColor = "#364F6B";
        gauche.style.color = "#F7DB69";
        droite.style.backgroundColor = "#364F6B";
        droite.style.color = "#F7DB69";
        centre.style.backgroundColor = "#3FC1C9";
        centre.style.color = "#364F6B"; */
        //document.body.style.backgroundColor = "#A12568";   
        pricing = "year";
    }

    

    else {
        tarifBasic.innerHTML = "$19,99";
        tarifProfessional.innerHTML = "$24,99";
        tarifMaster.innerHTML = "$39,99"; 
       /*  gauche.style.backgroundColor = "#3FC1C9";
        gauche.style.color = "#364F6B";
        droite.style.backgroundColor = "#3FC1C9";
        droite.style.color = "#364F6B";
        centre.style.backgroundColor = "#364F6B";
        //document.body.style.backgroundColor = "#FEC260";  
        centre.style.color = "#F7DB69";  */
        pricing = "month";

    }    
})