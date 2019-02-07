
/**
 * Initialisation des variables globales au jeu
 */

let newMove = document.querySelector('.pad');
let move = document.querySelector('body');
let maBalle = document.querySelector('.balle');
let newCarrer = document.querySelectorAll('.carrer');
let score = document.querySelector('h2');
let monText = document.querySelector('.text');


/**
 * Ajout d'un évènement sur la souris pour faire bouger le pad 
 */


move.addEventListener('mousemove', function (event) {

    console.log(event.code);


   newMove.style.left = event.x + 'px';

});

/**
 * Initialisation de variable de positionement et du score
 */

let vLeft = 0;
let vTop = -20;

let count = 0;

setInterval(function () {
    maBalle.style.left = maBalle.offsetLeft + vLeft + 'px';
    maBalle.style.top = maBalle.offsetTop + vTop + 'px';

/**
 * Appel des fonctions de collision
 */

    maCollision();
    collisionPad();
    collisionWall();
    
    
}, 50);


/**
 * Fonction qui gère la collision avec les blocs 
 * et qui ajoute une classe pour les faire "disparaitre" avec une opacity 0
 * gère aussi les rebonds
 */

function maCollision() {
    for (let item of newCarrer) {

        if (!item.classList.contains('destroyed')) {


            if (maBalle.offsetLeft < item.offsetLeft + item.offsetWidth &&
                maBalle.offsetLeft + maBalle.offsetWidth > item.offsetLeft &&
                maBalle.offsetTop < item.offsetTop + item.offsetHeight &&
                maBalle.offsetHeight + maBalle.offsetTop > item.offsetTop) {
                console.log('bloup');
                score.textContent = 'Score: ' + count++;
                item.classList.add("destroyed")
                
                
                vLeft = randomIntFromInterval(-15, 15);
                vTop = -vTop;
            }
            
        }
        win();
    }
}

/**
 * Fonction qui gère les collisions et les rebonds avec le pad
 */


function collisionPad() {
    if (maBalle.offsetLeft < newMove.offsetLeft + newMove.offsetWidth &&
        maBalle.offsetLeft + maBalle.offsetWidth > newMove.offsetLeft &&
        maBalle.offsetTop < newMove.offsetTop + newMove.offsetHeight &&
        maBalle.offsetHeight + maBalle.offsetTop > newMove.offsetTop) {


        vLeft = randomIntFromInterval(-15, 15)
        vTop = -vTop;
    }
}

function randomIntFromInterval(min,max) 
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Fonction qui gère les collisions et les rebonds 
 * sur le cadre de jeu
 * gère aussi le message 'Game over..' en cas de sorti du cadre de jeu par le bas
 */

function collisionWall(){
    if (maBalle.offsetTop <= 0){
        vLeft = randomIntFromInterval(-15, 15);
        vTop = -vTop
        
    }
    
    if (maBalle.offsetLeft <= 2){
        vLeft = randomIntFromInterval(-15, 15);
        maBalle.style.left = '3px';
    }

    if (maBalle.offsetLeft >= 1550){
        vLeft = randomIntFromInterval(-15, 15);
        maBalle.style.left = '1549px';
    }

    if (maBalle.offsetTop >= 765){
        
        maBalle.style.display = 'none';
        monText.style.display = "block";
        monText.textContent = "Game over..."
    }
}

/***
 * Fonction qui affiche le message quand on gagne 
 */

function win(){
let monText = document.querySelector('.text');
    
    if (count > 23){
        monText.style.display = "block";
        monText.textContent = "You win!";
        maBalle.style.display = "none";
    }
}

