document.addEventListener("DOMContentLoaded", ()=> {
    // allCards
    let allCards = document.querySelectorAll('.flip-card');

    allCards.forEach(function (card) {
        card.addEventListener('click', ()=> {
            card.querySelector('.flip-card-inner').classList.toggle('flipped');
        });
    });
});

