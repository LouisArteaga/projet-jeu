

let newMove = document.querySelector('.pad');
let move = document.querySelector('body');
let maBalle = document.querySelector('.balle');

move.addEventListener('keydown', function(event){

    console.log(event.code);


    if (event.code === 'ArrowRight' && newMove.offsetLeft <= 1350) {
        newMove.style.left = newMove.offsetLeft + 10 + 'px';
    }
    if (event.code === 'ArrowLeft') {
        newMove.style.left = newMove.offsetLeft - 10 + 'px';
    }
   
});

setInterval(function(){
    maBalle.style.top = maBalle.offsetTop - 10 + 'px';
    if
}, 50);