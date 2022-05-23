import { calcularISV, Producto } from "./06-desestructuracionFuncion";


/*
    ===== Código de TypeScript =====
*/
const carritoCompras: Producto[] = [
    { desc: 'Telefono 1', precio: 100 },
    { desc: 'Telefono 2', precio: 150 },
];

const [total, ivs] = calcularISV(carritoCompras);

console.log('Total: ', total);
console.log('ISV:', ivs);