// Declarar a vida dos pokemons.
let PikachuaEnergia = 80;
let CharmanderEnergia = 80;

// Organização das rodadas
let rodada = 1;

//Orgaanização dos ataques.
let attackPikachu = 0;
let attackCharmander = 0;


// Enquanto nenhum dos pokemons estiver atordoado, continue a luta.
while (PikachuaEnergia > 0 && CharmanderEnergia > 0 ) {
    console.log("🔁 Rodada", rodada);

    // Gerar a quantidade de dano dos ataques.
    attackPikachu = Math.floor(Math.random() * 25 );
    attackCharmander = Math.floor(Math.random() * 18 );

    // Hora dos ataques.
    PikachuaEnergia = PikachuaEnergia - attackCharmander;
    CharmanderEnergia = CharmanderEnergia - attackPikachu;

    // Mostrar informações e dano dos ataques. 
    console.log("⚡Pikachu usou Calda de ferro e causou", attackPikachu, "de dano!");
    console.log("🔥Charmander usou Chama Ardente e causou", attackCharmander, "de dano!");

    // Mostrar a vida que cada um ficou após uma batalha.
    console.log("❤️ Vida de Pikachu: ", PikachuaEnergia);
    console.log("❤️‍🔥 Vida de Charmander: ", CharmanderEnergia);
    console.log("--------------------------------");

    // Próxima rodada.
    rodada++;
}

//Mostar o grande campeão da batalha.
if (CharmanderEnergia <= 0 && PikachuaEnergia <= 0) {
    console.log("😒 Empate! Os dois foram pro chão ao mesmo tempo!");
} else if (PikachuaEnergia > CharmanderEnergia){
    console.log("Charmander está atordoado 😵‍💫, Pikachu é o grande vencedor 🏆!");
} else {
    console.log("Pikachu está atordoado 😵‍💫, Charmander é o grande vencedor 🏆!");
}