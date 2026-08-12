document.addEventListener('DOMContentLoaded', () => {
    // Seletores de Elementos Dom
    const botaoConcluir = document.getElementById('btn-concluir');
    const boxSucesso = document.getElementById('box-sucesso');
    const barraProgresso = document.getElementById('barra-progresso');
    const btnTema = document.getElementById('btn-tema');
    const htmlElement = document.documentElement;

    // --- 1. Lógica do Modo Escuro / Claro ---
    const alternarTema = () => {
        const temaAtual = htmlElement.getAttribute('data-theme');
        const novoTema = temaAtual === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', novoTema);
        localStorage.setItem('temaFavorito', novoTema);
    };

    // Inicialização do Tema Salvo
    const temaSalvo = localStorage.getItem('temaFavorito') || 'light';
    htmlElement.setAttribute('data-theme', temaSalvo);
    btnTema.addEventListener('click', alternarTema);


    // --- 2. Lógica da Barra de Progresso de Leitura ---
    const atualizarBarraProgresso = () => {
        const alturaDocumento = document.documentElement.scrollHeight - window.innerHeight;
        if (alturaDocumento > 0) {
            const porcentagemProgresso = (window.scrollY / alturaDocumento) * 100;
            barraProgresso.style.width = `${porcentagemProgresso}%`;
            // Atualiza acessibilidade em tempo de execução
            document.querySelector('.progress-bar-container').setAttribute('aria-valuenow', Math.round(porcentagemProgresso));
        }
    };
    
    window.addEventListener('scroll', atualizarBarraProgresso);


    // --- 3. Lógica de Conclusão do Tutorial ---
    const exibirEstadoConcluido = () => {
        botaoConcluir.style.display = 'none'; // Esconde botão para não poluir
        boxSucesso.style.display = 'flex'; // Exibe a caixa estilizada de sucesso
    };

    // Verifica persistência no cache do navegador
    if (localStorage.getItem('guiaDesenhoTerminado') === 'true') {
        exibirEstadoConcluido();
    }

    // Clique de Conclusão com Animação Natural
    botaoConcluir.addEventListener('click', () => {
        localStorage.setItem('guiaDesenhoTerminado', 'true');
        exibirEstadoConcluido();
    });
});
