export class Carro {
    marca:string;
    ano:number;
    velocidade:number;
    constructor ( marcaQueEuQuero : string, 
                  anoQueEuQuero: number,
                  velocidadeQueEuQuero: number) {
            this.marca = marcaQueEuQuero;
            this.ano = anoQueEuQuero;
            this.velocidade = velocidadeQueEuQuero; //não possui metodo  
    }
    acelerar(): void {
        this.velocidade += 10;
    }
    frear(): void {
        this.velocidade -=10;
    }
    parar(): void{
        this.velocidade =0;
    }
}