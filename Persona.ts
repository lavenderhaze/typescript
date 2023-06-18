import { Telefono } from "./Telefono.ts"
import { Direccion } from "./Direccion.ts"
import { Mail } from "./Mail.ts"

class Persona {
  private nombre: string
  private apellidos: string
  private edad: number

  private dni: string
  private cumpleaños: string 
  private colorFavorito: string
  private sexo: string

  private direcciones: Array<Direccion> = []
  private mails: Array<Mail> = []
  private telefonos: Array<Telefono> = []
  private notas: Array<string> = []

  public constructor(
    nombre: string,
    apellidos: string,
    edad: number,
    dni: string,
    cumpleaños: string,
    colorFavorito: string,
    sexo: string,

    direcciones?: Array<Direccion>,
    mails?: Array<Mail>,
    telefonos?: Array<Telefono>,
    notas?: Array<string>
  ) {
    this.nombre = nombre
    this.apellidos = apellidos
    this.edad = edad
    this.dni = dni
    this.cumpleaños = cumpleaños
    this.colorFavorito = colorFavorito
    this.sexo = sexo

    if (direcciones) {
      this.direcciones = direcciones
    }
    if (mails) {
      this.mails = mails
    }
    if (telefonos) {
      this.telefonos = telefonos
    }
    if (notas) {
      this.notas = notas
    }
  }

  public getNombre(): string {
    return this.nombre
  }
  public setNombre(nombre: string) {
    this.nombre = nombre
  }

  public getApellidos(): string {
    return this.apellidos
  }
  public setApellidos(apellidos: string) {
    this.apellidos = apellidos
  }

  public getEdad(): number {
    return this.edad
  }
  public setEdad(value: number) {
    this.edad = value
  }

  public getDni(): string {
    return this.dni
  }
  public setDni(value: string) {
    this.dni = value
  }

  public getCumpleaños(): string {
    return this.cumpleaños
  }
  public setCumpleaños(value: string) {
    this.cumpleaños = value
  }

  public getColorFavorito(): string {
    return this.colorFavorito
  }
  public setColorFavorito(value: string) {
    this.colorFavorito = value
  }

  public getSexo(): string {
    return this.sexo
  }
  public setSexo(value: string) {
    this.sexo = value
  }

  public getDirecciones(): Array<Direccion> {
    return this.direcciones
  }
  public setDirecciones(direcciones: Array<Direccion>) {
    this.direcciones = direcciones
  }

  public getMails(): Array<Mail> {
    return this.mails
  }
  public setMails(mails: Array<Mail>) {
    this.mails = mails
  }

  public getTelefonos(): Array<Telefono> {
    return this.telefonos
  }
  public setTelefonos(telefonos: Array<Telefono>) {
    this.telefonos = telefonos
  }

  public getNotas(): Array<string> {
    return this.notas
  }
  public setNotas(notas: Array<string>) {
    this.notas = notas
  }

  public addDireccion(direccion: Direccion) {
    this.direcciones.push(direccion)
  }

  public addMail(mail: Mail) {
    this.mails.push(mail)
  }

  public addTelefono(telefono: Telefono) {
    this.telefonos.push(telefono)
  }

  public log() {
    console.log(
      "Nombre: " + this.nombre + "Apellidos: ",
      this.apellidos + "Edad: " + this.edad
    )
  }
}

export { Persona }
