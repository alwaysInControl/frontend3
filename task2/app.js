const box = document.querySelector('.box')
let posX = 0
let posY = 0

const move = () => {
  if (posX < 450 && posY === 0) {
    posX++
    box.style.left = `${posX}px`
  } else if (posX === 450 && posY < 450) {
    posY++
    box.style.top = `${posY}px`
  } else if (posX > 0 && posY === 450) {
    posX--
    box.style.left = `${posX}px`
  } else if (posX === 0 && posY > 0) {
    posY--
    box.style.top = `${posY}px`
  }
  setTimeout(move, 1)
}

move()

const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const input = document.querySelector('.input')

start.onclick = function () {
  const interval = setInterval(() => {
    input.value = parseInt(input.value) + 1
  }, 150)
  reset.onclick = () => {
    input.value = 0
  }
  stop.onclick = () => clearInterval(interval)
}
