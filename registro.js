document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    const closeBtns = document.querySelectorAll('.close-btn');
    const signupLink = document.getElementById('signup-link'); // Novo: obter o link de registro

    // Função para alternar visibilidade do formulário
    function toggleForm(formId) {
        const form = document.getElementById(formId);
        form.classList.toggle('active'); // Alternar a classe 'active' para mostrar/ocultar o formulário
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

    // Evento de clique no link de registro
    signupLink.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link

        // Fechar formulário de login
        toggleForm('login-form');

        // Mostrar formulário de registro
        toggleForm('signup-form');
    });

    
    // Intercepta o envio do formulário de registro
    $('form#signup').submit(function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Validação (pode adicionar validação adicional aqui se necessário)

        // Simulação de registro bem sucedido
        var nome = $('#signup-username').val();
        alert('Registro Bem Sucedido!\nNovo Username: ' + nome);

        // Limpa os campos do formulário após o envio
        $('#signup-username, #signup-email, #signup-password').val('');

        // Fecha o formulário de registro
        toggleForm('signup-form');
    });
});
