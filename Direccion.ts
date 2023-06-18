class Direccion {
  private calle: string
  private numero: number
  private piso: number
  private letra: string
  private codigoPostal: number
  private poblacion: string

  public constructor(
    calle: string,
    numero: number,
    piso: number,
    letra: string,
    codigoPostal: number,
    poblacion: string
  ) {
    this.calle = calle
    this.numero = numero
    this.piso = piso
    this.letra = letra
    this.codigoPostal = codigoPostal
    this.poblacion = poblacion
  }

  public getCalle(): string {
    return this.calle
  }
  public setCalle(calle: string) {
    this.calle = calle
  }

  public getNumero(): number {
    return this.numero
  }
  public setNumero(numero: number) {
    this.numero = numero
  }

  public getPiso(): number {
    return this.piso
  }
  public setPiso(piso: number) {
    this.piso = piso
  }

  public getLetra(): string {
    return this.letra
  }
  public setLetra(letra: string) {
    this.letra = letra
  }

  public getCodigoPostal(): number {
    return this.codigoPostal
  }
  public setCodigoPostal(codigoPostal: number) {
    this.codigoPostal = codigoPostal
  }

  public getPoblacion(): string {
    return this.poblacion
  }
  public setPoblacion(poblacion: string) {
    this.poblacion = poblacion
  }
}

export { Direccion }
