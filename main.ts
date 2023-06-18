import { Direccion } from "./Direccion.ts"
import { Mail } from "./Mail.ts"
import { Persona } from "./Persona.ts"
import { Telefono } from "./Telefono.ts"

const registros = [
  new Persona(
    "Sandra",
    "Bullón Gutiérrez",
    24,
    "12345678J",
    "03/06",
    "rosa",
    "F",
    [new Direccion("Calle Emperatriz Eugenia", 1, 3, "B", 18002, "Granada")], 
    [new Mail("electrónico", "sbullon@outlook.es")],
    [new Telefono("fijo", 952554463)], 
    ["Esta soy yo"]
  ),
  new Persona(
    "Silvia",
    "Azucena Marcos",
    23,
    "44444444T",
    "01/09",
    "-",
    "F"
  ),
  new Persona(
    "William Robert",
    "Scott",
    34,
    "99999999X",
    "11/01",
    "verde",
    "M"
  ),
]

const persona1 = registros[0]
console.log("Mi nombre es: " + persona1.getNombre())
console.log("Mis apellidos son: " + persona1.getApellidos())
console.log("Mi edad es: " + persona1.getEdad())
console.log("Mi DNI es: " + persona1.getDni())
console.log("Mi cumpleaños es: " + persona1.getCumpleaños())
console.log("Mi color favorito es: " + persona1.getColorFavorito())
console.log("Mi sexo es: " + persona1.getSexo())
console.log("Mis teléfonos son: ")
persona1
  .getTelefonos()
  .forEach((telefono) =>
    console.log("\t" + telefono.getNumero() + " - " + telefono.getTipo())
  )
console.log("Mis mails son: ")
persona1
  .getMails()
  .forEach((mail) =>
    console.log("\t" + mail.getDireccion() + " - " + mail.getTipo())
  )
console.log("Mis direcciones son: ")
persona1
  .getDirecciones()
  .forEach((direccion) =>
    console.log("\t" + direccion.getCalle() + ", " + direccion.getNumero())
  )
console.log("Mis notas son: " + persona1.getNotas())

console.log("\n")

const persona2 = registros[1]
console.log("Mi nombre es: " + persona2.getNombre())
console.log("Mis apellidos son: " + persona2.getApellidos())
console.log("Mi edad es: " + persona2.getEdad())
console.log("Mi DNI es: " + persona2.getDni())
console.log("Mi cumpleaños es: " + persona2.getCumpleaños())
console.log("Mi color favorito es: " + persona2.getColorFavorito())
console.log("Mi sexo es: " + persona2.getSexo())

console.log("\n")

const persona3 = registros[2]
console.log("Mi nombre es: " + persona3.getNombre())
console.log("Mis apellidos son: " + persona3.getApellidos())
console.log("Mi edad es: " + persona3.getEdad())
console.log("Mi DNI es: " + persona3.getDni())
console.log("Mi cumpleaños es: " + persona3.getCumpleaños())
console.log("Mi color favorito es: " + persona3.getColorFavorito())
console.log("Mi sexo es: " + persona3.getSexo())

console.log("\n")

const dniBuscado = "44444444T"
const personaBuscada = registros.find(
  (registro) => registro.getDni() === dniBuscado
)

personaBuscada.addDireccion(
  new Direccion("Calle Esperanza", 28, 0, "-", 26394, "Algodonales")
)
personaBuscada.addMail(new Mail("email", "dreamsow@gmail.com"))
personaBuscada.addTelefono(new Telefono("fijo", 957617107))

console.log("Mi nombre es: " + persona1.getNombre())
console.log("Mis apellidos son: " + persona1.getApellidos())
console.log("Mi edad es: " + persona1.getEdad())
console.log("Mi dni es: " + persona1.getDni())
console.log("Mi cumpleaños es: " + persona1.getCumpleaños())
console.log("Mi color favorito es: " + persona1.getColorFavorito())
console.log("Mi sexo es: " + persona1.getSexo())
console.log("Mis teléfonos son: ")
persona1
  .getTelefonos()
  .forEach((telefono) =>
    console.log("\t" + telefono.getNumero() + " - " + telefono.getTipo())
  )
console.log("Mis mails son: ")
persona1
  .getMails()
  .forEach((mail) =>
    console.log("\t" + mail.getDireccion() + " - " + mail.getTipo())
  )
console.log("Mis direcciones son: ")
persona1
  .getDirecciones()
  .forEach((direccion) =>
    console.log("\t" + direccion.getCalle() + ", " + direccion.getNumero())
  )
console.log("Mis notas son: " + persona1.getNotas())

console.log("\n")

console.log("Mi nombre es: " + persona2.getNombre())
console.log("Mis apellidos son: " + persona2.getApellidos())
console.log("Mi edad es: " + persona2.getEdad())
console.log("Mi dni es: " + persona2.getDni())
console.log("Mi cumpleaños es: " + persona2.getCumpleaños())
console.log("Mi color favorito es: " + persona2.getColorFavorito())
console.log("Mi sexo es: " + persona2.getSexo())
console.log("Mis teléfonos son: ")
persona2
  .getTelefonos()
  .forEach((telefono) =>
    console.log("\t" + telefono.getNumero() + " - " + telefono.getTipo())
  )
console.log("Mis mails son: ")
persona2
  .getMails()
  .forEach((mail) =>
    console.log("\t" + mail.getDireccion() + " - " + mail.getTipo())
  )
console.log("Mis direcciones son: ")
persona2
  .getDirecciones()
  .forEach((direccion) =>
    console.log("\t" + direccion.getCalle() + ", " + direccion.getNumero())
  )
console.log("Mis notas son: " + persona2.getNotas())

console.log("\n")

console.log("Mi nombre es: " + persona3.getNombre())
console.log("Mis apellidos son: " + persona3.getApellidos())
console.log("Mi edad es: " + persona3.getEdad())
console.log("Mi dni es: " + persona3.getDni())
console.log("Mi cumpleaños es: " + persona3.getCumpleaños())
console.log("Mi color favorito es: " + persona3.getColorFavorito())
console.log("Mi sexo es: " + persona3.getSexo())
console.log("Mis teléfonos son: " + persona3.getTelefonos())
console.log("Mis mails son: " + persona3.getMails())
console.log("Mis direcciones son: " + persona3.getDirecciones())
console.log("Mis notas son: " + persona3.getNotas())