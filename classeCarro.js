class Carro{
    constructor(marca, ano, KmRodado){
        this.marca = marca;
        this.ano = ano;
        this.KmRodado = KmRodado;
    }
    saudar(){
        console.log(`Olá! A marca do meu carro é ${this.marca}!`);
    }
    Detalhes(){
        console.log(`O carro é um ${this.marca} é de ${this.ano} e tem ${this.KmRodado}.`);
    }
}
let carro1 = new Carro ("Civic g10", 2021, "0KM");
 carro1.saudar();
 carro1.Detalhes()
