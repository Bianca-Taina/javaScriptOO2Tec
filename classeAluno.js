class Aluno{
    constructor(nome, matricula, notas){
        this.nome = nome;
        this.matricula = matricula;
        this.notas = notas;
    }
    calcularMedia(){
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++){
            soma += this.notas[i]
        }
        return soma / this.notas.length;
    }


    obterStatus(){
        const media = this.calcularMedia()

        if (media >=7){
            return "Aprovado"
        } else if (media >=5){
            return "Recuperação"
        } else {
            return "Reprovado"
        }
    }
    obterStatus(){
        
    }

    exibirRelatorio(){
        console.log(`==================================`);
        console.log(`Relatorio do aluno ${this.nome}`);
        console.log(`Matricula ${this.matricula}`);
        console.log(`Media Final ${this.calcularMedia().toFixed(2)}`);
        console.log(`Status ${this.obterStatus}`);
        console.log(`==================================`);
    }
}

let turma = [
    new Aluno(`Lara`, `CGM5050`, [7.2, 6.5, 9.0]),
    new Aluno(`Luna`, `CGM5051`, [7.2, 6.5, 9.1]),
    new Aluno(`Ravi`, `CGM5052`, [9.2, 4.5, 9.5]),
    new Aluno(`Levi`, `CGM5053`, [7.8, 6.5, 9.9]),
    new Aluno(`Ayla`, `CGM5054`, [9.0, 8.5, 4.2]),
]


console.log(turma[3]);

for (let i = 0; i < turma.length; i++){
    turma[i].exibirRelatorio();
}

// let aluno1 = new Aluno("Bia", 5050, [8.7, 7.3, 9.0]);

//  console.log(aluno1.calcularMedia())
//  console.log(aluno1.obterStatus())
