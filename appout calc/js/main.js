
var inputScreen = document.getElementById('inputScreen');

function clickBtn(calc) {

    var pushed = calc.innerHTML;

    if (pushed == '=') {
        
        inputScreen.innerHTML = eval(inputScreen.innerHTML);

    } else if (pushed == 'AC'){

        inputScreen.innerHTML = '0'

    } else {

        if (inputScreen.innerHTML == '0') {

             inputScreen.innerHTML = pushed;

        } else {

            inputScreen.innerHTML += pushed;

        }
    }
}