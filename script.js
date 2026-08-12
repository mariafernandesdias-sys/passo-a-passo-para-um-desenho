// Agrupa a execução do código após o carregamento do DOM por segurança
document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('btn-concluir');
    const mensagem = document.getElementById('mensagem-status');

    // Função que renderiza visualmente o estado concluído
    const definirComoConcluido = () => {
        mensagem.textContent = "Parabéns por concluir o tutorial! Continue praticando. 🎨";
        mensagem.classList.add('ativo');
        botao.textContent = "Tutorial Concluído ✓";
        botao.style.opacity = "0.7";
        botao.style.pointerEvents = "none"; // Desabilita cliques futuros
    };

    // Verifica se o usuário já tinha concluído este tutorial antes
    if (localStorage.getItem('tutorialDesenhoConcluido') === 'true') {
        definirComoConcluido();
    }

    // Ouvinte do evento de clique
    botao.addEventListener('click', () => {
        definirComoConcluido();
        // Salva o estado no navegador do usuário
        localStorage.setItem('tutorialDesenhoConcluido', 'true');
    });
});
