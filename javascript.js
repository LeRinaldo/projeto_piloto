/* =====================================================
   AUMENTAR A FONTE
   ===================================================== */

/* Encontramos o botão pelo seu ID */
const botaoAumentar = document.getElementById("aumentar-fonte");

/* Quando o botão for clicado, esta função será executada */
botaoAumentar.addEventListener("click", function () {

    /* Pegamos o tamanho atual da fonte do body */
    let tamanhoAtual = parseFloat(
        getComputedStyle(document.body).fontSize
    );

    /* Aumentamos 2 pixels */
    tamanhoAtual = tamanhoAtual + 2;

    /* Aplicamos o novo tamanho */
    document.body.style.fontSize = tamanhoAtual + "px";
});


/* =====================================================
   DIMINUIR A FONTE
   ===================================================== */

const botaoDiminuir = document.getElementById("diminuir-fonte");

botaoDiminuir.addEventListener("click", function () {

    /* Descobrimos o tamanho atual da fonte */
    let tamanhoAtual = parseFloat(
        getComputedStyle(document.body).fontSize
    );

    /* Diminuímos 2 pixels */
    tamanhoAtual = tamanhoAtual - 2;

    /*
       Impedimos que a fonte fique pequena demais.
       O tamanho mínimo será de 12 pixels.
    */
    if (tamanhoAtual < 12) {
        tamanhoAtual = 12;
    }

    /* Aplicamos o novo tamanho */
    document.body.style.fontSize = tamanhoAtual + "px";
});


/* =====================================================
   ALTO CONTRASTE
   ===================================================== */

const botaoContraste = document.getElementById("contraste");

botaoContraste.addEventListener("click", function () {

    /*
       classList.toggle adiciona a classe se ela não existir
       e remove a classe se ela já existir.
    */
    document.body.classList.toggle("alto-contraste");

});


/* =====================================================
   LEITOR DE TELA / SÍNTESE DE VOZ
   ===================================================== */

const botaoLer = document.getElementById("ler-pagina");

botaoLer.addEventListener("click", function () {

    /*
       SpeechSynthesisUtterance é um recurso do navegador
       que permite transformar texto em fala.
    */

    /* Primeiro, pegamos todo o texto visível da página */
    const texto = document.body.innerText;

    /* Criamos um objeto de fala */
    const fala = new SpeechSynthesisUtterance(texto);

    /* Definimos o idioma como português do Brasil */
    fala.lang = "pt-BR";

    /* Definimos uma velocidade de leitura confortável */
    fala.rate = 0.9;

    /* Pedimos ao navegador para falar */
    speechSynthesis.speak(fala);
});


/* =====================================================
   PARAR A LEITURA
   ===================================================== */

const botaoParar = document.getElementById("parar-leitura");

botaoParar.addEventListener("click", function () {

    /*
       cancel() interrompe imediatamente qualquer
       leitura que esteja acontecendo.
    */
    speechSynthesis.cancel();

});
