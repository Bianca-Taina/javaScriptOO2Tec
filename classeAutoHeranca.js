class Automovel{
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}`;
    }
}

class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
    exibirDetalhes(){
        return `${super.exibirDetalhes()}, Portas:${this.portas}`;
    }
} 

class Moto extends Automovel{
    constructor(marca, modelo, ano, cilindrada){
        super(marca, modelo, ano);
        this.cilindrada = cilindrada
    }
    exibirDetalhes(){
         return `${super.exibirDetalhes()}, Portas:${this.cilindrada}`;
    }
} 

let moto1 = new Moto(" Kawasaki", "Ninja H2", 2015, 998 );
console.log(moto1.exibirDetalhes());
let carro1 = new Carro ("Bugatti La Voiture Noire", "GT-R NISMO", 2024, 2);