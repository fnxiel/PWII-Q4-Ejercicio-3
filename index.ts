
interface Persona {
    id: string | number
    edad: number
    nombre: string
    apellido: string
    lugarResidencia: string
    esEstudiante?: boolean
    fotoIdentidad: FotoIdentidad
    caminar(cantidadKilometrosCaminados: number): number
    dormir(horasSueno: number): number
}

interface FotoIdentidad{
    src: string
    alt: string
    alto: number
    ancho: number
    formato: string
}


let algoDeTexto: string = "Hola mundo"

let esteEsUnNumero: number

function caminar(cantidadKilometrosCaminados : number) : number{
    return cantidadKilometrosCaminados * 1.5
}

function dormir(horasSueno : number) : number{
    return horasSueno * 2
}

let persona1: Persona = {
    id: "1567658769",
    edad: 18,
    apellido: "Skywalker",
    nombre: "Luke",
    fotoIdentidad: {
        src: "www.google.com/imagen.png",
        alt: "Logo de google",
        alto: 250,
        ancho: 250,
        formato: "png"
    },
    lugarResidencia: "Direccion",
    caminar: caminar,
    dormir: dormir
}


let persona2: Persona = {
    id: 1567658769,
    edad: 18,
    apellido: "Skywalker",
    nombre: "Luke",
    fotoIdentidad: {
        src: "www.google.com/imagen.png",
        alt: "Logo de google",
        alto: 250,
        ancho: 250,
        formato: "png"
    },
    lugarResidencia: "Direccion",
    esEstudiante: true,
    caminar: (cantidadKilometrosCaminados: number) => {
        return 1
    },
    dormir: (horasSueno: number) => {
        return 2
    }
}

let persona3: Persona = {
    id: "1567658769",
    edad: 18,
    apellido: "Skywalker",
    nombre: "Luke",
    fotoIdentidad: {
        src: "www.google.com/imagen.png",
        alt: "Logo de google",
        alto: 250,
        ancho: 250,
        formato: "png"
    },
    lugarResidencia: "Direccion",
    caminar: caminar,
    dormir: dormir
}

/*
let fotoIdentidadPersona4: FotoIdentidad = {
    src: "",
    alt: "",
    alto: 0,
    ancho: 0,
    formato: ""
}

let persona4: Persona ={
    id: "",
    edad: 0,
    nombre: "",
    apellido: "",
    lugarResidencia: "",
    fotoIdentidad: fotoIdentidadPersona4
}
*/

let listadoPersonas: Persona[] = []

listadoPersonas.push(persona1)