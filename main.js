let heroi = {
    nome: "Valente",
    vida: 100,
    forca: 20,
    recurso: 50,
};

function mostrarStatus() {
    console.log(`Status de ${heroi.nome}: Vida: ${heroi.vida}, Força: ${heroi.forca}, Recurso: ${heroi.recurso}`);
}

function rodada() {
    const desafio = Math.floor(Math.random() * 3);
    
    switch (desafio) {
        case 0:
            console.log(`${heroi.nome} enfrentou um monstro feroz!`);
            let dano = Math.floor(Math.random() * 30);
            heroi.vida -= dano;
            console.log(`O herói sofreu ${dano} de dano.`);
            break;
        case 1:
            console.log(`${heroi.nome} encontrou um tesouro!`);
            let ganho = Math.floor(Math.random() * 30);
            heroi.recurso += ganho;
            console.log(`O herói ganhou ${ganho} recursos.`);
            break;
        case 2:
            console.log(`${heroi.nome} treinou para aumentar sua força!`);
            let aumento = Math.floor(Math.random() * 5);
            heroi.forca += aumento;
            console.log(`A força do herói aumentou em ${aumento}.`);
            break;
    }

    mostrarStatus();

    if (heroi.vida <= 0) {
        console.log(`${heroi.nome} não sobreviveu à aventura. Fim do jogo.`);
    } else {
        setTimeout(rodada, 1000); // Chama a próxima rodada após 1 segundo
    }
}

function start() {
    console.log(`A aventura de ${heroi.nome} começou!`);
    mostrarStatus();
    rodada();
}
