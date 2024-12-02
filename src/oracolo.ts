interface IOracolo {
  stampaNumero(): void
}

class Oracolo implements IOracolo {
  stampaNumero(): void {
    console.log(Math.random())
  }
}

abstract class OracoloDecorator implements IOracolo {
  protected oracolo: IOracolo

  constructor(oracolo: IOracolo) {
    this.oracolo = oracolo
  }

  stampaNumero(): void {
    this.oracolo.stampaNumero()
  }
}

class OracoloBenvenuto extends OracoloDecorator {
  stampaNumero(): void {
    console.log('Benvenuto!')
    super.stampaNumero()
  }
}

class OracoloArrivederci extends OracoloDecorator {
  stampaNumero(): void {
    super.stampaNumero()
    console.log('Arrivederci!')
  }
}

const oracolo = new Oracolo()
const oracoloBenvenuto = new OracoloBenvenuto(oracolo)
const oracoloArrivederci = new OracoloArrivederci(oracoloBenvenuto)
oracoloArrivederci.stampaNumero()
