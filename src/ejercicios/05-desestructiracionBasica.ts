/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "mes",
    detalles: {
        autor: "Ed Sheeran",
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

console.log('El volumen actual es: ', volumen);
console.log('El segundo actual es: ', segundo);
console.log('La canción actual es: ', cancion);
console.log('El autor actual es: ', autor);

const dbz: String[] = ['Goku', 'Vegeta', 'Trunks'];
const [goku, vegeta, trunks] = dbz;

console.log('El primer personaje es: ', goku);
console.log('El segundo personaje es: ', vegeta);
console.log('El tercer personaje es: ', trunks);