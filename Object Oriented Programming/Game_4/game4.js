let pikachu = document.querySelector('.pikachu');
let dragon = document.querySelector('.dragon');
let score = 0;
let displayScore = document.querySelector('.score');




let jump = function () {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

let moveRight = function () {
    pikachu.style.left = parseInt(pikachu.style.left) + 50 + 'px';
    
}


let moveLeft = function () {
    pikachu.style.left = parseInt(pikachu.style.left) - 50 + 'px';
    
}
    function moveSelection(evt) {
        console.log(evt.keyCode);
        console.log( Number(window.getComputedStyle(pikachu).left.replace('px', '')))
        switch (evt.keyCode) {
            case 32:
                jump();
                break;

            case 39:
                moveRight()
                
                break;

            case 37:
                moveLeft();
                break;
        }
    }

function showScore() {
    score++;
    displayScore.innerHTML = score;
}
let loop = setInterval(() => {

    let dragonPosition = dragon.offsetLeft;
    let pikachuPosition = Number(window.getComputedStyle(pikachu).bottom.replace('px', ' '));
  console.log(dragonPosition);
  console.log(pikachuPosition);

    // console.log(dragonPosition + 'left');
    // console.log(pikachPosition);

    if (dragonPosition < 100 && dragonPosition > 0 && pikachuPosition < 130) {

        dragon.style.animation = 'none';
        dragon.style.left = `${dragonPosition}px`;

        pikachu.style.animation = 'none';
        pikachu.style.bottom = `${pikachuPosition}px`;
        pikachu.src = "pikachuRip.png";
        pikachu.style.bottom = `${pikachuPosition}px`;
        dragon.style.left = 300 + 'px';
        dragon.style.bottom = 220 + 'px';
        dragon.style.width = "350px"
        dragon.style.height = "350px"
        dragon.src = "dragonhaha.gif";
        document.querySelector('.GameOver').innerHTML = "GAME OVER"

        // location.reload();

        clearInterval(showScore);
    }

    let pikachuRight = Number(window.getComputedStyle(pikachu).right.replace('px', ''));
    console.log(pikachuRight);

    if (pikachuRight <= -130){
        pikachu.style.bottom = `${pikachuPosition}px`;
        pikachu.style.left = 0 + 'px';
    }

    let pikachuLeft = Number(window.getComputedStyle(pikachu).left.replace('px', ''));
    console.log(pikachuLeft);
    if (pikachuLeft <= -130){
        pikachu.style.bottom = `${pikachuPosition}px`;
        pikachu.style.right = 0 + 'px';
        pikachu.src = "pikachuRip.png"
    }

    if (pikachuRight >= 1000){
        pikachu.style.left = -50 + 'px'
    }

}, 10);
 

setInterval(showScore, 150);
displayScore.innerHTML += "<p>Score: </p>" + score++;



document.addEventListener('keydown', moveSelection);
console.log(dragonPosition);