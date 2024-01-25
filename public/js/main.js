document.addEventListener("DOMContentLoaded", ()=>{

    // array of images
    let arrayImages = ["./public/src/img/carteBatman.png","./public/src/img/carte2.png","./public/src/img/carte3.png","./public/src/img/carte4.png"];
    
    // allCards
    let allCards = document.querySelectorAll(".flip-card");
    
    // Method for duplicate my arrayImages
    let pairsArray = arrayImages.concat(arrayImages);

    // Melange les pairs
    pairsArray = melange(pairsArray);

    let cardReturn = [];

    allCards.forEach(function (card, index) {
        card.addEventListener("click", () => {
            if (card.querySelector(".flip-card-inner").classList.contains("flipped") || card.querySelector(".flip-card-inner").classList.contains("same")) {
                // Il ne se passe rien si la carte est deja retourner ou assortie
            } else {
                let randomImage = pairsArray[index];
                card.querySelector(".flip-card-back").style.backgroundImage = `url(${randomImage})`;
                card.querySelector(".flip-card-inner").classList.toggle("flipped");
                cardReturn.push(card);
                if (cardReturn.length === 2) {
                    // verifie si les 2 cartes sont les memes
                    sameCard();
                }
            }
        });
    });

    function sameCard() {
        if (cardReturn[0].querySelector(".flip-card-back").style.backgroundImage === cardReturn[1].querySelector(".flip-card-back").style.backgroundImage) {
            // si cest les memes cartes add class same
            cardReturn.forEach((card) => card.querySelector(".flip-card-inner").classList.add("same"));
        } else {
            // si cest pas la meme elle se remove
            cardReturn.forEach((card) => {
                card.querySelector(".flip-card-inner").classList.remove("flipped");
                card.querySelector(".flip-card-back").style.backgroundImage = '';
            });
        }
        // Reinitialise le tableau des cartes retourner
        cardReturn = [];
    }

    function melange(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});