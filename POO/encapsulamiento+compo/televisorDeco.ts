class Televisor {
    private estaPrendido: boolean;
    private decodificador: Decodificador;
    public constructor(decodificador: Decodificador) {
    this.decodificador = decodificador;
    }
    public prenderApagar(): void {
    if (this.estaPrendido)
    this.estaPrendido = false;
    else
    this.estaPrendido = true;
    }
    public subirVolumen(): void {
    if (this.estaPrendido)
    this.decodificador.subirVolumen();
    }
    public bajarVolumen(): void {
    if (this.estaPrendido)
    this.decodificador.subirVolumen();
    }
    public subirCanal(): void {
    if (this.estaPrendido)
    this.decodificador.subirCanal();
    }
    public bajarCanal(): void {
    if (this.estaPrendido)
    this.decodificador.bajarCanal();
    }
    public cambiarCanal(canal: number): void {
    if (this.estaPrendido)
    this.decodificador.cambiarCanal(canal);
    }
    public verCanalActual(): number {
    return this.decodificador.verCanalActual();
    }
    public verVolumenActual(): number {
    return this.decodificador.verVolumenActual();
    }
}
    
    let decodificador: Decodificador = new Decodificador();
    let primerTelevisor: Televisor = new Televisor(decodificador);
    primerTelevisor.cambiarCanal(15);