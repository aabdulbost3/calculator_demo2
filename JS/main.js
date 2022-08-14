const accountInputElement = document.querySelector(".account")
const resultInputElement = document.querySelector(".result")

function input(i) {
    accountInputElement.value = accountInputElement.value + i;
}

function result () {
    if(eval(accountInputElement.value) == undefined) {
        resultInputElement.value = '0,00';
        accountInputElement.value = '0,00'
    } if(eval(accountInputElement.value)  == Infinity) {
        resultInputElement.value = '0,00'
        accountInputElement.value = "Infinity"
    }
    resultInputElement.value = eval(accountInputElement.value)
    accountInputElement.value = eval(accountInputElement.value)
}

function backspace() {
    accountInputElement.value = accountInputElement.value.substring(0, accountInputElement.value.length-1)
}

function reset() {
    resultInputElement.value = ''
    accountInputElement.value = '0,00'
}