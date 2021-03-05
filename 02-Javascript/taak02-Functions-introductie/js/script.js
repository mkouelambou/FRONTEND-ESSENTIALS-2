toonAlertBox();
function toonAlertBox(){
    alert("This is my first message");
}
let Nickname;
Nickname = prompt("What is your nickname?");
if(Nickname == true){ 
    alert("OK!");
}
else { 
    Nickname = confirm("Is your name "+Nickname+"?");
    if(Nickname == true){ 
    alert("OK!");   
    }
    else{
    alert("Dan niet!");   
    }
}
console.log("Welkom!");