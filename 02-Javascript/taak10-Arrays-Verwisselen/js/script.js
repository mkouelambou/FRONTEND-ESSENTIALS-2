topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca"
];

function moveup(nummer){
    bewaren = topFilms[nummer-1]
    verwijderen = topFilms.splice(nummer-1, 1);
    toevoegen = topFilms.splice(nummer-2, 0, bewaren);
    console.log(topFilms);
    iets();
}
function movedown(nummer){
    bewaren = topFilms[nummer-1]
    verwijderen = topFilms.splice(nummer-1, 1);
    toevoegen = topFilms.splice(nummer, 0, bewaren);
    console.log(topFilms);
    iets();
}
function resetList(){
    document.getElementById("regel1").innerHTML = "The Godfather";    
    document.getElementById("regel2").innerHTML = "The Shawshank Redemption";   
    document.getElementById("regel3").innerHTML = "Schindler's List";   
    document.getElementById("regel4").innerHTML = "Raging Bull";   
    document.getElementById("regel5").innerHTML = "Casablanca"; 
      
}
function iets(){
    document.getElementById("regel1").innerHTML = topFilms[0];
    document.getElementById("regel2").innerHTML = topFilms[1];
    document.getElementById("regel3").innerHTML = topFilms[2];
    document.getElementById("regel4").innerHTML = topFilms[3];
    document.getElementById("regel5").innerHTML = topFilms[4];
}