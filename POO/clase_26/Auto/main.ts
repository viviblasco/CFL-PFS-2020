import Auto from "./Auto";
import AutoDeCarrera from "./AutodeCarrera";

let primerAuto: Auto = new Auto('Ford', 'Fiesta');
let superAuto: Auto = new AutoDeCarrera('Ford', 'Mustang');
primerAuto.acelerar();
superAuto.acelerar();
console.log(primerAuto);
console.log(superAuto);