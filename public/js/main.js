document.addEventListener("DOMContentLoaded", ()=>{

    // array of images
    let arrayImages = ["./public/src/img/carteBatman.png","./public/src/img/carte2.png","./public/src/img/carte3.png","./public/src/img/carte4.png"];
    
    // allCards
    let allCards = document.querySelectorAll(".flip-card");
    
    // Method for duplicate my arrayImages
    let pairsArray = arrayImages.concat(arrayImages);

    // Melange les pairs
    pairsArray = shuffleArray(pairsArray);

    let flippedCards = [];

    allCards.forEach(function (card, index) {
        card.addEventListener("click", () => {
            if (card.querySelector(".flip-card-inner").classList.contains("flipped") || card.querySelector(".flip-card-inner").classList.contains("same")) {
                // Il ne se passe rien si la carte est deja retourner ou assortie
            } else {
                let randomImage = pairsArray[index];
                card.querySelector(".flip-card-back").style.backgroundImage = `url(${randomImage})`;
                card.querySelector(".flip-card-inner").classList.toggle("flipped");
                flippedCards.push(card);
                if (flippedCards.length === 2) {
                    // verifie si les 2 cartes sont les memes
                    checkMatches();
                }
            }
        });
    });

    function checkMatches() {
        if (flippedCards[0].querySelector(".flip-card-back").style.backgroundImage === flippedCards[1].querySelector(".flip-card-back").style.backgroundImage) {
            // si cest les memes cartes add class same
            flippedCards.forEach((card) => card.querySelector(".flip-card-inner").classList.add("same"));
        } else {
            // si cest pas la meme elle se remove
            flippedCards.forEach((card) => {
                card.querySelector(".flip-card-inner").classList.remove("flipped");
                card.querySelector(".flip-card-back").style.backgroundImage = '';
            });
        }

        // Reinitialise le tableau des cartes retourner
        flippedCards = [];
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
