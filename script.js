// Exemplo simples: Dar um feedback quando o usuário terminar o tutorial
const botao = document.getElementById('btn-concluir');
const mensagem = document.getElementById('mensagem-status');

botao.addEventListener('click', () => {
    mensagem.textContent = "Parabéns por concluir o tutorial! Continue praticando. 🎨";
    mensagem.style.color = "#00b894";
    mensagem.style.fontWeight = "bold";
    mensagem.style.marginTop = "15px";
});
