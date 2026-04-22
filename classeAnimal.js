class Animal{
    fazerSom(){
        console.log("Som generico de animal....");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐕🐕🐕🐕")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAL MIAL MIAL MIAL 🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛🐈‍⬛")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MU MU MUUUUUU MU MUUUUU 🐄🐄🐄🐄🐄🐄")
    }
}

class Pato extends Animal{
    fazerSom(){
        console.log("QUA QUA QUA QUA QUA 🪿🪿🪿🪿🪿🪿🪿🪿")
    }
}

class Porco extends Animal{
    fazerSom(){
        console.log("OINC OINC OINC OINC 🐖🐖🐖🐖🐖🐖🐖")
    }
}

class Pintinho extends Animal{
    fazerSom(){
        console.log("PIU PIU PIU PIU PIU 🐤🐤🐤🐤🐤🐤")
    }
}

class Ovelha extends Animal{
    fazerSom(){
        console.log("BÉÉÉÉ BÉÉÉÉ BÉÉÉÉ 🐑🐑🐑🐑🐑🐑")
    }
}

class Cobra extends Animal{
    fazerSom(){
        console.log("SSSSSSSSSSS SSSSSSSS 🐍🐍🐍🐍🐍🐍")
    }
}

class CriançaChorando extends Animal{
    fazerSom(){
        console.log("Bwah! AHA! HA! Bwah! AHA! HA! 👶🏼👶🏼👶🏼👶🏼👶🏼")
    }
}

const meusObjetos = [new Cachorro(), new Gato(), new Vaca(), new Pato(), new Porco(), new Pintinho(), new Ovelha(), new Cobra(), new CriançaChorando()];

for (let i = 0; i < meusObjetos.length; i++){
    meusObjetos[i].fazerSom();
}
