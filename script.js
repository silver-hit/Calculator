

const display = document.getElementById('result');


function appendNumber(number) {
    display.value += number;
}



// Get all elements with the 'number' class
const numberButtons = document.getElementsByClassName('number');

// Attach click event listeners to each number button
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function() {
        let buttonNumber = numberButtons[i].innerHTML;
        appendNumber(buttonNumber);
    });
}

const plus     = document.getElementById('plus');
const minus    = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide   = document.getElementById('divide');

function appendOperator(operator) {
    display.value += operator
}

plus.addEventListener("click", function() {
    appendOperator(plus.innerHTML)
} )

minus.addEventListener("click", function() {
    appendOperator(minus.innerHTML)
})

multiply.addEventListener("click", function() {
    appendOperator(multiply.innerHTML)
})

divide.addEventListener("click", function(){
    appendOperator(divide.innerHTML)
})

const clear = document.getElementById('clear')

clear.addEventListener("click", function() {
    display.value = 0;
})

const equals = document.getElementById('equals')

equals.addEventListener("click", function() {
    display.value = eval(display.value)
    
})
