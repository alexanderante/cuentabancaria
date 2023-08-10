class CuentaCorriente extends Cuenta {
    private sobregiro: number = 0;

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo + this.sobregiro) {
            if (cantidad <= this.saldo) {
                this.saldo -= cantidad;
            } else {
                this.sobregiro -= cantidad - this.saldo;
                this.saldo = 0;
            }
            this.numeroRetiros++;
        } else {
            console.log("saldo insuficiente para retirar.");
        }
    }

    consignar(cantidad: number): void {
        if (this.sobregiro > 0) {
            this.sobregiro -= cantidad;
            if (this.sobregiro < 0) {
                this.saldo += Math.abs(this.sobregiro);
                this.sobregiro = 0;
            }
        } else {
            super.consignar(cantidad);
        }
    }

    extractoMensual(): void {
        super.extractoMensual();
        this.sobregiro += this.saldo < 0 ? Math.abs(this.saldo) : 0;
    }

    imprimir(): void {
        super.imprimir();
        console.log("comision mensual:", this.comisionMensual);
        console.log("numero de transacciones:", this.numeroConsignaciones + this.numeroRetiros);
        console.log("sobregiro:", this.sobregiro);
    }
}

