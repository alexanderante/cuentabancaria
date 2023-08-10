
import { CuentaAhorros, CuentaCorriente } from "./Cuenta";


const cuentaAhorros = new CuentaAhorros(12000, 2);
cuentaAhorros.imprimir();
cuentaAhorros.consignar(5000);
cuentaAhorros.retirar(3000);
cuentaAhorros.extractoMensual();
cuentaAhorros.imprimir();


const cuentaCorriente = new CuentaCorriente(8000, 1.5);
cuentaCorriente.imprimir();
cuentaCorriente.consignar(2000);
cuentaCorriente.retirar(10000);
cuentaCorriente.extractoMensual();
cuentaCorriente.imprimir();
