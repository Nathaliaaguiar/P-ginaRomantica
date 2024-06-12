var mostrarBtn = document.getElementById("mostrarBtn");
var mensagem = document.getElementById("mensagem");

mostrarBtn.addEventListener("click", function() {
    mensagem.classList.toggle("hidden");
});
// Obter a data de início do relacionamento
var dataInicio = new Date("01/09/2011"); // Mês/Dia/Ano

// Função para atualizar o contador de dias
function atualizarContador() {
    var dataAtual = new Date();
    var diferenca = Math.abs(dataAtual - dataInicio);
    var diasPassados = Math.floor(diferenca / (1000 * 60 * 60 * 24)); // Calcula a diferença em dias

    document.getElementById("contadorDias").textContent = diasPassados;
}

// Atualizar o contador de dias a cada segundo (1000 milissegundos)
setInterval(atualizarContador, 1000);
//Função do jogo da porta

var iniciarBtn = document.getElementById("iniciarBtn");
var jogoDiv = document.getElementById("jogo");
var portas = document.querySelectorAll(".porta");
var mensagemJogo = document.getElementById("mensagemJogo");
var tentarNovamenteBtn = document.getElementById("tentarNovamenteBtn");
var tesouroDiv = document.getElementById("tesouro");

var numeroPortaTesouro; // Número da porta que contém o tesouro (1, 2 ou 3)

iniciarBtn.addEventListener("click", function() {
    jogoDiv.classList.remove("hidden");
    iniciarBtn.classList.add("hidden");
    tentarNovamenteBtn.classList.add("hidden");

    // Escolher aleatoriamente a porta que contém o tesouro
    numeroPortaTesouro = Math.floor(Math.random() * 3) + 1;
    
    // Permitir cliques nas portas
    portas.forEach(function(porta, index) {
        porta.style.pointerEvents = "auto";
        porta.addEventListener("click", function() {
            var numeroPortaEscolhida = index + 1;

            if (numeroPortaEscolhida === numeroPortaTesouro) {
                mensagemJogo.textContent = "VOCÊ ENCONTROU O TESOURO";
              mensagemJogo.style.color = "green";
                tesouroDiv.classList.remove("hidden");
                tentarNovamenteBtn.classList.remove("hidden");
              tentarNovamenteBtn.style.display = "none";
              // Adicionar espaçamento vertical entre as portas e a mensagem do jogo
              document.querySelector('.mensagem').style.paddingTop = '20px';
            } else {
                mensagemJogo.textContent = "Ops! Você escolheu a porta errada. Tente novamente!";
              mensagemJogo.style.color = "red";
                tentarNovamenteBtn.classList.remove("hidden");
            }

            // Desabilitar cliques nas portas após a escolha
            portas.forEach(function(p) {
                p.style.pointerEvents = "none";
            });
        });
    });
});

tentarNovamenteBtn.addEventListener("click", function() {
    mensagemJogo.textContent = "";
    tentarNovamenteBtn.classList.add("hidden");

    // Restaurar o jogo para permitir uma nova tentativa
    portas.forEach(function(porta) {
        porta.style.pointerEvents = "auto";
    });

    // Esconder a mensagem de tesouro encontrado
    tesouroDiv.classList.add("hidden");

    // Escolher aleatoriamente a porta que contém o tesouro
    numeroPortaTesouro = Math.floor(Math.random() * 3) + 1;
});



