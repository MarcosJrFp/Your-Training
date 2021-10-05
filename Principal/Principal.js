
/*Cria-se um evento toda vez que clicar na classe hamburguer */
document.querySelector(".hamburguer").addEventListener("click", () => 

    /*Evento a ser gerado, inserindo na classe ".container" a classe "show-menu" */
    document.querySelector(".container").classList.toggle("show-menu")
);

/*Função para modificar a barra de navegação, ao deslocar a janela */
window.addEventListener("scroll", function() {
    var barraNav = document.querySelector(".barraNav");
    barraNav.classList.toggle("sticky", window.scrollY > 25);

    var hamburguer = document.querySelector(".hamburguer");
    hamburguer.classList.toggle("sticky", window.scrollY > 25);
})

/*Criação de animação para os elementos da página, quando o scroll for usado */
const elementos=document.querySelectorAll('[data-anima]'); 
const animacaoClass='animacao';

function animaScroll() {
    const topoPag=window.pageYOffset;
    elementos.forEach(function(elemento) {
        if(topoPag > elemento.offsetTop) {
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass);
        }
    });
}

if(elementos.length) {
    window.addEventListener('scroll',function() {
        animaScroll();
    })
}