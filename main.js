
const form = document.getElementById('convertor-form');
const output = document.getElementById('output')

const valRomanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const valArabicos = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];



form.addEventListener('submit', function (event) {

    event.preventDefault() //evitar refresco pantalla

    const number = document.getElementById('number').value;
    if (number === '') {
        output.style.color = "red"
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        output.style.color = "red"
        output.textContent = "Please enter a number less than or equal to 3999";
    }
    else {
        output.textContent = convertorNumber(number);
        output.style.color = "blue"
    }

})


function convertorNumber(number) {
    let resultado = '';
    for (let i = 0; i < valArabicos.length; i++) {
        while (number >= valArabicos[i]) {
            resultado += valRomanos[i];
            number -= valArabicos[i];
        }
    }
    return resultado
}