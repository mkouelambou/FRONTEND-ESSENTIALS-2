let strNaam;
let boolNaamKlopt;

prompt("Hoe heet je?");
strNaam = prompt("Hoe heet je?");
alert("Je heet " + strNaam);
boolNaamKlopt = confirm("Heet je echt " + strNaam +"?");
alert("Welkom Mike !");
strNaam = prompt("Nog een keer: Hoe heet je?");
boolNaamKlopt = confirm("Heet je echt " + strNaam +"?");

if (boolNaamKlopt = "true"){
    alert("Confirmation Succesfull!");
}
else{
    alert("Hallo, even goed welkom !");
}

