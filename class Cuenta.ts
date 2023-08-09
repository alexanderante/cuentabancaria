class Cuenta {
    protected saldo: number;
    protected numeroConsignaciones: number;
    protected numeroRetiros: number;
    protected tasaAnual: number;
    protected comisionMensual: number;

    constructor(saldoInicial: number, tasaAnual: number) {
        this.saldo = saldoInicial;
        this.numeroConsignaciones = 0;
        this.numeroRetiros = 0;
        this.tasaAnual = tasaAnual;
        this.comisionMensual = 0;
    }

    obtenerSaldo(): number {
        return this.saldo;
    }

    obtenerNumeroConsignaciones(): number {
        return this.numeroConsignaciones;
    }

    obtenerNumeroRetiros(): number {
        return this.numeroRetiros;
    }

    realizarConsignacion(monto: number): void {
        this.saldo += monto;
        this.numeroConsignaciones++;
    }

    realizarRetiro(monto: number): boolean {
        if (this.saldo >= monto) {
            this.saldo -= monto;
            this.numeroRetiros++;
            return true;
        } else {
            return false;
        }
    }

    calcularInteresMensual(): void {
        const interesMensual = (this.saldo * this.tasaAnual) / 12 / 100;
        this.saldo += interesMensual;
    }

    aplicarComisionMensual(): void {
        this.saldo -= this.comisionMensual;
    }
}

