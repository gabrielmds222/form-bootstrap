$('#form').submit(function(){
    var nome = $('#nome');
    var email = $('#email');
    var mensagem = ('$mensagem');
    var erro = $('.alert');
    var campo = $('#campo-erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    if (nome.val() == '' ) {
        erro.removeClass('d-none');
        campo.html('nome');
        nome.focus();
        nome.addClass('is-invalid');

        return false;
    }

    if (email.val() == '' ) {
        erro.removeClass('d-none');
        campo.html('email');
        email.focus();
        email.addClass('is-invalid');

        return false;
    }

    //temporário
    return false;
});



