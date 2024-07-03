document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const forms = document.querySelectorAll('.form'); // Seleciona todos os formulários

    // Função para alternar visibilidade dos formulários
    function toggleForm(formId) {
        let anyFormActive = false;

        // Fecha todos os formulários
        forms.forEach(form => {
            if (form.classList.contains('active')) {
                anyFormActive = true;
                form.classList.remove('active'); // Remove a classe 'active' de todos os formulários
            }
        });

        // Se nenhum formulário estiver ativo ou se um formulário específico foi clicado
        if (!anyFormActive || formId) {
            const form = document.getElementById(formId);
            form.classList.toggle('active'); // Alternar a classe 'active' para mostrar/ocultar o formulário específico
        }
    }

    // Evento de clique no botão de login
    loginBtn.addEventListener('click', () => {
        toggleForm('login-form');
    });

    // Evento de clique nos botões de fechar
    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const formId = btn.getAttribute('data-form'); // Obter o ID do formulário a partir do atributo data-form
            toggleForm(formId);
        });
    });

    // Intercepta o envio do formulário de login
    $('#login').submit(function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Validação
        var nome = $('#username').val();
        var pass = $('#password').val();

        if (nome === '' || pass === '') {
            alert('Por favor preencha todos os campos do formulário');
            return;
        }

        // Simulação de envio bem sucedido
        alert('Login Bem Sucedido!\nUsername: ' + nome);

        // Limpa os campos do formulário após o envio
        $('#username, #password').val('');

        // Fecha todos os formulários
        toggleForm();
    });
});
