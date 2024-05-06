// Função para exibir uma mensagem de boas-vindas
function exibirMensagemDeBoasVindas() {
    alert("Welcome! We hope you enjoy your visit.");
}

// Função para alterar continuamente a cor de fundo do body
function mudarCorDeFundoContinuamente() {
    // Cores disponíveis para escolha aleatória
    var cores = ["#FF5733", "#33FF57", "#3366FF", "#FF33C7", "#FFFF33"];
    
    // Intervalo para mudar a cor a cada 2 segundos (2000 milissegundos)
    setInterval(function() {
        // Escolhe uma cor aleatória da lista
        var corEscolhida = cores[Math.floor(Math.random() * cores.length)];
        
        // Aplica a cor escolhida como cor de fundo do body
        document.body.style.backgroundColor = corEscolhida;
    }, 2000); // Altera a cada 2 segundos
}

// Chama as funções de boas-vindas e de mudança de cor quando a página é carregada
window.onload = function() {
    exibirMensagemDeBoasVindas();
    mudarCorDeFundoContinuamente();
};
