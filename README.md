# Présentation du projet jeu 1.0.1

*ce projet a pour but d'approfondir nos connaissances en javascript dans un contexte inhabituel, mais de pouvoir les réutiliser plus tard dans  des projets plus concrets.*


**intérêt**
===

* mise en pratique des connaissances
* utiliser le JavaScript dans un autre contexte
* pour le portfolio

---


## Modifications de la 1.0.1

ce petit patch à réglé le problème de la balle qui sortais du cadre de jeu.




---

## Exemple de code utilisé pour faire rebondir la balle

```
let vLeft = 0;
let vTop = -10;
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
                vLeft = randomIntFromInterval(-15, 15)
                vTop = -vTop
            }
        }
    }
}

```

---

## Version test

Le jeu est en première version donc des améliorations sont à venir.

---

## Libre d'utilisation 

Mon code est libre vous pouvez l'utiliser dans vos projets sans problème.

---