const innInput = document.getElementById('innInput')
const innCheck = document.getElementById('innCheck')
const innResult = document.querySelector('.innResult')

const inn = /^\d{14}$/

innCheck.onclick = function () {
    if(inn.test(innInput.value)) {
        innResult.innerHTML = 'OK'
        innResult.style.color = 'green'
    } else {
        innResult.innerHTML = 'INCORRECT'
        innResult.style.color = 'red'
    }
}

const box = document.querySelector('.box')
let move = 0
const moveBox = () => {
    box.style.left=`${move}px`
    move += 2
    if (move < 452) {
        setTimeout(moveBox, 10)
    }
}
moveBox()