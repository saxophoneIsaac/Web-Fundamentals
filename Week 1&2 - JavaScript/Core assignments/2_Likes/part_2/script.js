console.log("JavaSCript connected.");

var likesCounter1 = 3;

function likeIncrease1() {
    likesCounter1 ++;
    var likeDisplay = document.getElementById('likeCounter-1');
    likeDisplay.innerText = `${likesCounter1} likes`;
    return;
}

var likesCounter2 = 12;

function likeIncrease2() {
    likesCounter2 ++;
    var likeDisplay = document.getElementById('likeCounter-2');
    likeDisplay.innerText = `${likesCounter2} likes`;
    return;
}

var likesCounter3 = 9;

function likeIncrease3() {
    likesCounter3 ++;
    var likeDisplay = document.getElementById('likeCounter-3');
    likeDisplay.innerText = `${likesCounter3} likes`;
    return;
}