/*
    ===== Código de TypeScript =====
*/
interface Pasajeros {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajeros = {
    nombre: 'Fernando',
}

const pasajero2: Pasajeros = {
    nombre: 'Juan',
    hijos: ['Pedro', 'Pablo']
}

function imprimirHijos(pasajeros: Pasajeros): void {
    const cuantosHijos = pasajeros.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimirHijos(pasajero1);
