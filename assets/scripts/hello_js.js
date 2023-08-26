// alert('hello JS!');

const defaultValue = 0;
let currentValue = defaultValue;

function add(){
    currentValue += parseInt(userInput.value);
    outputResult(currentValue, 'Hello World!');
}

function subtract(){
    currentValue -= parseInt(userInput.value);
    outputResult(currentValue, 'Hello World!');
}

function mul(){
    currentValue *= parseInt(userInput.value);
    outputResult(currentValue, 'Hello World!');
}

function div(){
    currentValue /= parseInt(userInput.value);
    outputResult(currentValue, 'Hello World!');
}


addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', mul);
divideBtn.addEventListener('click', div);

outputResult(currentValue, 'Hello World!');