const input = document.querySelector('input')
const minVal = document.querySelector('[data-min]')
const maxVal = document.querySelector('[data-max]')
const resetVal = document.querySelector('button')

function addVal() {
    let inputVal = input.value.split(',').map(Number)

    let minNum = Math.min(...inputVal)
    let maxNum = Math.max(...inputVal)

    minVal.innerText = minNum
    maxVal.innerText = maxNum
}

function reset() {
    input.value = ""
    minVal.innerText = ""
    maxVal.innerText = ""
}

input.addEventListener('input', addVal)
resetVal.addEventListener('click', reset)