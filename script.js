const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result');

let firstValue = "";
let isFirstValue = false;
let secondValue = "";
let isSecondValue = false;
let sign = "";
let resultValue = "";

for(let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirstValue === false) {
            getFirstValue(atr)
        }
    })
}

