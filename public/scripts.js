const modalOverlay = document.querySelector('.modal-overlay')//pegando o elemento modalOverlay, seleciona qualquer elemento baseado em classe, id ou em tag, baseado no seletor css
const cards = document.querySelectorAll('.card')//pegando os cards com selectorAll. O selectorAll significa que irei pegar uma coleção de valores iguais

for (let card of cards){
    card.addEventListener("click", function(){ //ouvvidor de eventos, aqui vou pegar o click
        const videoId = card.getAttribute("id")
        window.location.href = `/video?id=${videoId}`
    }) 
}


