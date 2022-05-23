import { setSourceMapRange } from "typescript"

/*
    ===== Código de TypeScript =====
*/
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    motrarHp: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Strider",
    pv: 50,
    motrarHp: () => {
        console.log('puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.motrarHp();


// const resultado = sumar(10, 20);
// const flecha = sumarFlecha(10, 20);
// const resultadoMultiplicar = multiplicar(5, 0, 10);

// console.log('Suma ' + resultado);
// console.log('Sumar Flecha ' + flecha);
// console.log('Multiplicar ' + resultadoMultiplicar);
