document.addEventListener('DOMContentLoaded', () => {
    // Referências do DOM
    const botaoConcluir = document.getElementById('btn-concluir');
    const boxSucesso = document.getElementById('box-sucesso');
    const barraProgresso = document.getElementById('barra-progresso');
    const btnTema = document.getElementById('btn-tema');
    const htmlElement = document.documentElement;

    // --- 1. Sistema Modular de Cores / Temas ---
    const gerenciarTema = {
        alternar() {
            const temaAtual = htmlElement.getAttribute('data-theme');
            const novoTema = temaAtual === 'light' ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', novoTema);
            localStorage.setItem('temaArtista', novoTema);
        },
        inicializar() {
            const temaSalvo = localStorage.getItem('temaArtista') || 'light';
            htmlElement.setAttribute('data-theme', temaSalvo);
            btnTema.addEventListener('click', this.alternar);
        }
    };
    gerenciarTema.inicializar();

    // --- 2. Barra de Progresso Dinâmica ao Scroll ---
    const monitorarScroll = () => {
        const alturaDisponivel = document.documentElement.scrollHeight - window.innerHeight;
        if (alturaDisponivel > 0) {
            const progressoAtual = (window.scrollY / alturaDisponivel) * 100;
            barraProgresso.style.width = `${progressoAtual}%`;
            // Atualiza acessibilidade
            document.querySelector('.progress-bar-container').setAttribute('aria-valuenow', Math.round(progressoAtual));
        }
    };
    window.addEventListener('scroll', monitorarScroll);

    // --- 3. Controle de Conclusão e Cache ---
    const registrarFimTutorial = () => {
        botaoConcluir.style.display = 'none';
        boxSucesso.style.display = 'flex';
    };

    if (localStorage.getItem('tutorial5PassosCompleto') === 'true') {
        registrarFimTutorial();
    }

    botaoConcluir.addEventListener('click', () => {
        localStorage.setItem('tutorial5PassosCompleto', 'true');
        registrarFimTutorial();
    });
});
