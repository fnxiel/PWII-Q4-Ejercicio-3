
interface IPersona {
    id: string | number
    edad: number
    nombre: string
    apellido: string
    lugarResidencia: string
    esEstudiante?: boolean
    fotoIdentidad?: IFotoIdentidad
    estadoCivil: "Casado" | "Soltero" | "Viudo" | "Divorciado" | "Union Libre"
    caminar(cantidadKilometrosCaminados: number): number
    dormir(horasSueno: number): number
}

interface IFotoIdentidad{
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

let persona1: IPersona = {
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
    estadoCivil: "Casado",
    lugarResidencia: "Direccion",
    caminar: caminar,
    dormir: dormir
}


let persona2: IPersona = {
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
    estadoCivil: "Casado",
    caminar: (cantidadKilometrosCaminados: number) => {
        return 1
    },
    dormir: (horasSueno: number) => {
        return 2
    }
}

let persona3: IPersona = {
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
    estadoCivil: "Union Libre",
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

let listadoPersonas: IPersona[] = []

const persona5 = {}

listadoPersonas.push(persona1)

//listadoPersonas.push(persona5)


function distintosValores(tipoRetorno: string): number | void {
    if(tipoRetorno == 'number'){
        return 1
    }
}

console.log(distintosValores('number'))
console.log(distintosValores('otro'))

class Alumno implements IPersona{
id: string|number
edad: number
nombre: string
apellido: string
lugarResidencia: string
esEstudiante?: boolean|undefined
fotoIdentidad?: IFotoIdentidad
estadoCivil: "Casado"|"Soltero"|"Viudo"|"Divorciado"|"Union Libre"

constructor(id: string | number, edad: number, nombre: string, apellido: string, lugarResidencia: string, fotoIdentidad?: IFotoIdentidad){
    this.id = id
    this.edad = edad
    this.nombre = nombre
    this.apellido = apellido
    this.lugarResidencia = lugarResidencia
    //this.fotoIdentidad = fotoIdentidad
    this.estadoCivil = "Soltero"
}

caminar(cantidadKilometrosCaminados: number): number {
    return 2 * cantidadKilometrosCaminados
}
dormir(horasSueno: number): number {
    return 4 * horasSueno
}

}

class Maestro implements IPersona{
id: string|number
edad: number
nombre: string
apellido: string
lugarResidencia: string
esEstudiante?: boolean|undefined
fotoIdentidad?: IFotoIdentidad
estadoCivil: "Casado"|"Soltero"|"Viudo"|"Divorciado"|"Union Libre"

constructor(id: string | number, edad: number, nombre: string, apellido: string, lugarResidencia: string, fotoIdentidad?: IFotoIdentidad){
    this.id = id
    this.edad = edad
    this.nombre = nombre
    this.apellido = apellido
    this.lugarResidencia = lugarResidencia
    this.fotoIdentidad = fotoIdentidad
    this.estadoCivil = "Soltero"
}

caminar(cantidadKilometrosCaminados: number): number {
    return cantidadKilometrosCaminados * 5
}
dormir(horasSueno: number): number {
    return horasSueno * 0.5
}
    
}

let persona6 = new Maestro(1, 20, "Luke", "Skywalker", "Honduras")
console.log(persona6.caminar(5))
let persona7 = new Alumno(2, 18, "Leia", "Organa", "Honduras")
console.log(persona7.caminar(5))

listadoPersonas.push(persona6)
listadoPersonas.push(persona7)


///////Ejercicio peliculas

interface IPelicula{
    titulo: string
    anual: IEnlace
    duracion?: string
    clasificacion: IEnlace
    videoPrincipal: IMultimedia
    videos: IMultimedia[]
    fotos: IMultimedia[]
}

interface IEnlace{
    url: string
    texto: string
}

interface IMultimedia{
    src: string
    textoAlternativo: string
    tipo: "imagen" | "video"
}