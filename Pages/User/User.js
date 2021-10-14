/*Cria-se um evento toda vez que clicar na classe hamburguer */
document.querySelector(".hamburguer").addEventListener("click", () => 

    /*Evento a ser gerado, inserindo na classe ".container" a classe "show-menu" */
    document.querySelector(".container").classList.toggle("show-menu")
);
