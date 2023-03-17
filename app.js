let c1;
let c2;
let risultato;

function calcola(){
    let c1 = document.getElementById("c1").value;
    let c2 = document.getElementById("c2").value;
    risultato = Math.sqrt((c1**2)+(c2**2));
    document.getElementById("risultato").innerHTML = risultato;
}