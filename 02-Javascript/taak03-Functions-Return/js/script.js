function geefRandomGetalTerug(){
    let geefRandomGetalTerug = Math.random();
    Math.random = randomGetal *100 + 1;
    randomGetal = Math.floor(randomGetal); 
    geefRandomGetalTerug = 10;
    randomGetal = [10];
    return 10;
}

console.log(geefRandomGetalTerug());    