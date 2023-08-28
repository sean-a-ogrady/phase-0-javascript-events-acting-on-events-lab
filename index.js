// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}
//const game = document.getElementById('game');
//const computedGameWidth = getComputedStyle(game).width;
//const gameWidth = parseInt(computedGameWidth.replace('px', ''));
//const computedDodgerWidth = getComputedStyle(dodger).width;
//const dodgerWidth = parseInt(computedDodgerWidth.replace('px', ''));
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace('px', '');
    const left = parseInt(leftNumbers);
    if (left < 360/*gameWidth - dodgerWidth*/){
        dodger.style.left = `${left + 1}px`;
    }
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft'){
        moveDodgerLeft();
    }
    if (e.key === 'ArrowRight'){
        moveDodgerRight();
    }
});