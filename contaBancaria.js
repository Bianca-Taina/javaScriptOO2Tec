class ContaBancaria{

    #saldo = 0;

    constructor(titular){
        this.titular = titular;
    }

    depositar(valor){
        if (valor > 0){
            this.#saldo += valor;
            console.log(`Depósito de ${valor} feito.`);
        }
    }

    sacar(valor){
        if (valor > 0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$ ${valor} feito`);

        } else{
            console.log("Saldo insuficiente ou valor insuficiente");
        }
    }

    exibirsaldo(){
        return `Olá, seu saldo é ${this.#saldo}`
    }
    
}

const conta1 = new ContaBancaria("Bia, o huno");
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.depositar(10000);
conta1.sacar(1200);
conta1.sacar(2500);
conta1.sacar(10);
conta1.sacar(1052);
console.log(conta1.exibirsaldo())


