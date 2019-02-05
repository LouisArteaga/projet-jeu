

let newMove = document.querySelector('.pad');
let move = document.querySelector('body');
let maBalle = document.querySelector('.balle');
let newCarrer = document.querySelectorAll('.carrer');

move.addEventListener('keydown', function (event) {

    console.log(event.code);


    if (event.code === 'ArrowRight' && newMove.offsetLeft <= 1350) {
        newMove.style.left = newMove.offsetLeft + 20 + 'px';
    }
    if (event.code === 'ArrowLeft') {
        newMove.style.left = newMove.offsetLeft - 20 + 'px';
    }

});
let vLeft = 0;
let vTop = -10;
let speed = 1.15;

setInterval(function () {
    maBalle.style.left = maBalle.offsetLeft + vLeft + 'px';
    maBalle.style.top = maBalle.offsetTop + vTop + 'px';

    maCollision();
    collisionPad();
    collisionWall();
}, 50);

function maCollision() {
    for (let item of newCarrer) {

        if (!item.classList.contains('destroyed')) {


            if (maBalle.offsetLeft < item.offsetLeft + item.offsetWidth &&
                maBalle.offsetLeft + maBalle.offsetWidth > item.offsetLeft &&
                maBalle.offsetTop < item.offsetTop + item.offsetHeight &&
                maBalle.offsetHeight + maBalle.offsetTop > item.offsetTop) {
                console.log('bloup');
                item.classList.add("destroyed")
                vLeft = randomIntFromInterval(-15, 15);
                vTop = -vTop;
            }
        }
    }
}

function collisionPad() {
    if (maBalle.offsetLeft < newMove.offsetLeft + newMove.offsetWidth &&
        maBalle.offsetLeft + maBalle.offsetWidth > newMove.offsetLeft &&
        maBalle.offsetTop < newMove.offsetTop + newMove.offsetHeight &&
        maBalle.offsetHeight + maBalle.offsetTop > newMove.offsetTop) {


        vLeft = randomIntFromInterval(-15, 15) * speed;
        vTop = -vTop * speed;
    }
}

function randomIntFromInterval(min,max) // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

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
        alert('tu as perdu');
    }
}