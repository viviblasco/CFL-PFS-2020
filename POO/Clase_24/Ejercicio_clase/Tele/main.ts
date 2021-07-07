import SmartTV from "./SmartTv";

let tele = new SmartTV();

console.log(tele);

tele.subirVolumen();
tele.cambiarCanal(10);
console.log(this.volumenActual);
console.log(this.estaPrendido);
console.log(this.canalActual);


console.log(tele);
