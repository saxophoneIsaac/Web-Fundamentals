console.log("JavaSCript connected.");

var likesCounter = 3;

function likeIncrease() {
    likesCounter ++;
    var likeDisplay = document.getElementById('likeCounter');
    likeDisplay.innerText = `${likesCounter} likes`;
    return;
}