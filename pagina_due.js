let i;
let c;
let risultato;

function calcola(){
    let i = document.getElementById("i").value;
    let c = document.getElementById("c").value;
    risultato = Math.sqrt((i**2)-(c**2));
    document.getElementById("risultato").innerHTML = risultato;
}