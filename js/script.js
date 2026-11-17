const botoes = document.querySelectorAll(".adicionar-carrinho")

botoes.forEach(function(botao) {

    botao.addEventListener ("click", function(){
        
        console.log ("Botão clicado!")
    });

});