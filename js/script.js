
const carrinho = [];
const elementoTotal = document.querySelector(".total-carrinho");
console.log (elementoTotal)

// 1. SELECIONAR OS BOTÕES
const botoes = document.querySelectorAll(".adicionar-carrinho");

// 2. IDENTIFICAR O CLIQUE
botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // 3. IDENTIFICAR O PRODUTO
        const produto = botao.closest(".produto");

        // 4. OBTER O NOME
        const titulo = produto.querySelector("h3");
        const nome = titulo.textContent.trim();

        // 5. OBTER O PREÇO
        const elementoPreco = produto.querySelector(".preco");
        const preco = elementoPreco.textContent.trim();

        // 6. CONVERTER O PREÇO PARA NÚMERO
        const semSimbolo = preco.replace("R$", "");
        const comPonto = semSimbolo.replace(",", ".");
        const precoNumero = Number(comPonto);

        // 7. CRIAR O OBJETO DO HAMBÚRGUER
        const hamburguer = {
            nome: nome,
            preco: precoNumero,
            quantidade: 1
        };

        // 8. VERIFICAR SE O PRODUTO JÁ EXISTE NO CARRINHO
        const produtoExistente = carrinho.find(function(item) {
            return item.nome === nome;
        });

        // 9. ATUALIZAR A QUANTIDADE OU ADICIONAR O PRODUTO
        if (produtoExistente) {
            produtoExistente.quantidade += 1;
        } else {
            carrinho.push(hamburguer);
        }

        // 10. CALCULAR O TOTAL DO CARRINHO
        let total = 0;

        carrinho.forEach(function(item) {
            total += item.preco * item.quantidade;
        });

        // 11. FORMATAR O TOTAL EM REAIS
        const totalFormatado = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(total);

        // 12. VERIFICAR OS DADOS
        console.log("Produto existente:", produtoExistente);
        console.log("Produto:", nome);
        console.log("Preço:", precoNumero);
        console.log("Hambúrguer:", hamburguer);
        console.log("Carrinho:", carrinho);
        console.log("Total do carrinho:", totalFormatado);

    });

});
