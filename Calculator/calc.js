const NUMBER1 = document.getElementById("number1");
const NUMBER2 = document.getElementById("number2");

const PLUS = document.getElementById("plus");
const MINUS = document.getElementById("plus");
const DIVIDE = document.getElementById("divide");
const MULTIPLY = document.getElementById("multiply");

const RESULT = document.getElementById("result");

PLUS.addEventListener('click', () => {
    const ADDITION = parseInt(NUMBER1.value) + parseInt(NUMBER2.value); 
    RESULT.innerText = ADDITION.toString();

});

MINUS.addEventListener('click', () => {
    const SOUSTRACTION = parseInt(NUMBER1.value) - parseInt(NUMBER2.value);
    RESULT.innerText = SOUSTRACTION.toString();
});  


DIVIDE.addEventListener('click', () =>  {
    const DIVISION = parseInt(NUMBER1.value) / parseInt(NUMBER2.value); 
    RESULT.innerText = DIVISION.toString();
});

MULTIPLY.addEventListener('click', () =>  {
    const MULTIPLICATION = parseInt(NUMBER1.value) * parseInt(NUMBER2.value); 
    RESULT.innerText = MULTIPLICATION.toString();
});
