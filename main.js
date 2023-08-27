$(document).ready(function(){
    $('#tel').mask('00-00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            msg: {
                required: true
            }
        },
        messages: {
            nome: '<p class="error mt-2">Por favor insira seu nome.</p>',
            email: '<p class="error mt-2">Por favor Digite seu Email.</p>',
            msg: '<p class="error mt-2">Por favor Digite sua mensagem</p>'
        },
        submitHandler: function(){
            $('.alert-success').fadeIn(500)
            $('#nome').val('')
            $('#email').val('')
            $('#tel').val('')
            $('#msg').val('')
        },
        invalidHandler: function(){
            $('.alert-success').fadeOut(500)
        }
    })
})