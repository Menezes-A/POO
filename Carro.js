export class Carro {
    constructor(marcaQueEuQuero, anoQueEuQuero, velocidadeQueEuQuero) {
        this.marca = marcaQueEuQuero;
        this.ano = anoQueEuQuero;
        this.velocidade = velocidadeQueEuQuero; //não possui metodo  
    }
    acelerar() {
        this.velocidade += 10;
    }
    frear() {
        this.velocidade -= 10;
    }
    parar() {
        this.velocidade = 0;
    }
}
