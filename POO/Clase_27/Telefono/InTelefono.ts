interface Telefono {
    prender(): void;
    apagar(): void;
    llamar(numero: string): void;
}

class SmartPhone implements Telefono {
    private estaPrendido: boolean;

    public prender(): void {
        this.estaPrendido = true;
    }

    public apagar(): void {
        this.estaPrendido = false;
    }

    public llamar(numero: string) {
        console.log('Llamando a ' + numero);        
    }
}