let strNaam;
let boolNaamKlopt;
strNaam = prompt("Hoe heet je?");
boolNaamKlopt = confirm("Heet je "+strNaam+"?");
console.log(strNaam,boolNaamKlopt);
if(boolNaamKlopt == true){ 
    alert("Welkom "+strNaam +"!");
}
else { 
    strNaam = prompt("Nog een keer, hoe heet je?");
    boolNaamKlopt = confirm("Heet je "+strNaam+"?");
    if(boolNaamKlopt == true){ 
    alert("Welkom "+strNaam +"!");
    }
    else{
    alert("Ok, evengoed welkom !");   
    }
}


