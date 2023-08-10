    class Cuenta {
    protected saldo: number;
    protected numeroConsignaciones: number;
    protected numeroRetiros: number;
    protected tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.tasaAnual = tasaAnual
    }
    consignar(cantidad: number): void {
        this.saldo += cantidad;
        this.numeroConsignaciones++;
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            this.numeroRetiros++;
        } else {
            console.log("saldo insuficiente para retirar.");
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.tasaAnual / 12) / 100 * this.saldo;
        this.saldo += interesMensual;
    }

    extractoMensual(): void {
        this.saldo -= this.comisionMensual;
        this.calcularInteresMensual();
    }

    imprimir(): void {
        console.log("saldo:", this.saldo);
        console.log("numero de consignaciones:", this.numeroConsignaciones);
        console.log("numero de retiros:", this.numeroRetiros);
    }

    
    }

    
    


