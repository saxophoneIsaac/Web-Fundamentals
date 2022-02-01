console.log("testing")

function heartClick (){
    alert('Please log in')
}

// if all heart things hace the same class

var heartClickers = document.querySelectorAll(".heartClick");

console.log(heartClickers);
for(var i = 0; i < heartClickers.length; i++) {
    var element = heartClickers[i];
    element.addEventListener('click', heartClick);
}

OnMouseover = hoverOver(this), onmouseout

function hoverOver(element) {

}