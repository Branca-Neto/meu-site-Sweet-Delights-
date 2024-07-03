$(document).ready(function() {
    // Intecepta o envio do formulário
    $('form#contactForm').submit(function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Validação
        var nome = $('#nome').val();
        var apelido = $('#apelido').val();
        var email = $('#email').val();
        var telefone = $('#telefone').val();
        var produto = $('#produto').val();
        var quantidade = $('#quantidade').val();
        var endereco = $('#endereco').val();  // Supondo que haja um campo de endereço

        if (nome === '' || apelido === '' || email === '' || telefone === '' || produto === '' || quantidade === '' || endereco === '') {
            alert('Por favor preencha todos os campos do formulário');
            return;
        }

        // Simulação de envio bem sucedido
        alert('Pedido enviado com sucesso!\nNome: ' + nome + '\nApelido: ' + apelido + '\nEmail: ' + email + '\nTelefone: ' + telefone + '\nProduto: ' + produto + '\nQuantidade: ' + quantidade + '\nEndereço: ' + endereco);

        // Limpa os campos do formulário após o envio
        $('#nome, #apelido, #email, #telefone, #produto, #quantidade, #endereco').val('');
    });
});


$(document).ready(function() {
    // Evento de clique para login com Facebook
    $('#login-facebook').on('click', function(e) {
        e.preventDefault();
        // URL de autenticação do Facebook
        window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email,public_profile';
    });

    // Evento de clique para login com Instagram
    $('#login-instagram').on('click', function(e) {
        e.preventDefault();
        // URL de autenticação do Instagram
        window.location.href = 'https://api.instagram.com/oauth/authorize?client_id=YOUR_INSTAGRAM_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user_profile,user_media&response_type=code';
    });

    // Evento de clique para login com Google
    $('#login-google').on('click', function(e) {
        e.preventDefault();
        // URL de autenticação do Google
        window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=token&scope=email profile';
    });
});




