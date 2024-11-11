document.addEventListener("DOMContentLoaded", function () {
//função de conversão
    function converterDuracao() {
        let inTitulo = document.getElementById("inTitulo");
        let inDuracao = document.getElementById("inDuracao");
        let outTitulo = document.getElementById("outTitulo");
        let outResultado = document.getElementById("outResultado");
        let outCategoria = document.getElementById("outCategoria");
        
        let titulo = inTitulo.value;
        let duracao = Number(inDuracao.value);
        let horas = Math.floor(duracao / 60);
        let minutos = duracao % 60

        outTitulo.textContent = titulo;
        outResposta.textContent = `${horas} hora(s) e ${minutos} minuto(s)`;

        let categoria;
        if (duracao < 60) {
        categoria = "Curta-metragem";
        } else if (duracao >= 60 && duracao < 120) {
        categoria = "Filme de longa-metragem";
        } else {
        categoria = "Filme épico";
        }

        outCategoria.textContent = categoria;
    }
    
    // cria uma referência ao elemento btnConverter (botão)
    const btnConverter = document.getElementById("btnConverter");

        
    // registra um evento associado ao botão e carregar uma função
    btnConverter.addEventListener("click", converterDuracao);
});
