var score = 0;
let getal1;
let getal2;

function makeRandomNumber(){
    return Math.floor(Math.random()*99+1);
}

function showRandomNumber1(){
    let randomGetal = makeRandomNumber()
    document.querySelector(".getal1").innerHTML = randomGetal;
    return randomGetal;
}



getal1 = showRandomNumber1();
getal2 = showRandomNumber2();

function showRandomNumber2(){
    let randomGetal = makeRandomNumber();
    document.querySelector(".getal2").innerHTML = randomGetal;
    return randomGetal;
}

function geefAntwoord(Antwoord){
    getal1 = document.querySelector(".getal1").innerHTML;
    getal2 = document.querySelector(".getal2").innerHTML;
    score = document.querySelector(".score").innerHTML;
    if(getal1 > getal2 && Antwoord == 'hoger'){
        score = score -1+2;
        document.querySelector(".score").innerHTML = score;  
        document.querySelector("body").style.backgroundColor = "Green";
        
    }else if(getal1 < getal2 && Antwoord == 'hoger'){
        score = score -1;
        document.querySelector(".score").innerHTML = score;  
        document.querySelector("body").style.backgroundColor = "Red";
    }
    if(getal1 < getal2 && Antwoord == 'lager'){
        score = score -1+2;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "Green";
    }
    else if(getal1 > getal2 && Antwoord == 'lager'){
        score = score -1;
        document.querySelector(".score").innerHTML = score;
        document.querySelector("body").style.backgroundColor = "Red";
    }
    showRandomNumber1();
    showRandomNumber2();
}
