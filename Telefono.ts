type TipoTelefono = "fijo" | "movil"

class Telefono {
  private tipo: TipoTelefono
  private numero: number

  public constructor(tipo: TipoTelefono, numero: number) {
    this.tipo = tipo
    this.numero = numero
  }

  public getTipo(): TipoTelefono {
    return this.tipo
  }
  public setTipo(tipo: TipoTelefono) {
    this.tipo = tipo
  }

  public getNumero(): number {
    return this.numero
  }
  public setNumero(numero: number) {
    this.numero = numero
  }
}

export { Telefono }
