class Mail {
  private tipo: string
  private direccion: string

  public constructor(tipo: string, direccion: string) {
    this.tipo = tipo
    this.direccion = direccion
  }

  public getTipo(): string {
    return this.tipo
  }
  public setTipo(tipo: string) {
    this.tipo = tipo
  }

  public getDireccion(): string {
    return this.direccion
  }
  public setDireccion(direccion: string) {
    this.direccion = direccion
  }
}

export { Mail }
