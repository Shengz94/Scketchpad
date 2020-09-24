

const scketchContainer = document.querySelector('.main-pane .container .cc');
var colorR = 0;
var colorG = 0;
var colorB = 0;
var multiColor = false;


function createPane(size){
    const squareRatio = 380 / size;

    for (column = 1; column < size + 1; column++){
        for (row = 1; row < size + 1; row++){
            var square =  document.createElement('div');
            var id = 'square' + column + '-' + row;
            square.classList.add('square');
            square.setAttribute('id', id);
            square.setAttribute('onmouseover', 'changeColor("' + id + '")');
            square.style.cssText = 'width: ' + squareRatio + 'px ; ' +
                                    'height: ' + squareRatio + 'px ; ';          
            scketchContainer.appendChild(square);

        }
    }
    var clearDiv = document.createElement('div');
    clearDiv.style.cssText = 'clear: both'
    scketchContainer.appendChild(clearDiv);

}

function changeColor(id){
    if(multiColor){
        colorR = getRandomInt(0, 255);
        colorG = getRandomInt(0, 255);
        colorB = getRandomInt(0, 255);
    }
    else{
        colorR = 0;
        colorG = 0;
        colorB = 0;
    }
    document.getElementById(id).style.backgroundColor = 'RGB(' + colorR +
                                                        ', ' + colorG +
                                                        ', ' + colorB + ')';
}

function resetSketch(){
    while (scketchContainer.firstChild) {
        scketchContainer.removeChild(scketchContainer.firstChild);
    }
    newGrid = parseInt(prompt("How many squares per side? (max 64):", 16));
    for(var i = 0; i< 3 && newGrid > 64; i++)
        newGrid = parseInt(prompt("How many squares per side? (max 64):", 16));
    if(newGrid < 1 || newGrid > 64)
        newGrid = 16;
    createPane(newGrid);
}

function colorTrace(){
    colorButton = document.querySelector('button #color');

    if(multiColor){
        multiColor = !multiColor;
        document.getElementById('color').textContent = 'Multicolor';
    }
    else {
        multiColor = !multiColor;
        document.getElementById('color').textContent = 'Black';
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

createPane(16);