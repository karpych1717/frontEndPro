'use strict'

const TASKS_AMOUNT = 1
window.onload = () => setUp(TASKS_AMOUNT)

function taskFunction1 () {
  const pic = document.createElement('img')

  const picName = randomPicName(0)
  pic.src = `./images/${picName}`
  pic.alt = `${picName} was not provided`
  pic.style.display = 'block'

  document.getElementById('paper').appendChild(pic)

  function randomPicName (n) {
    return n !== 0 ? `${n}.jpg` : randomPicName( Math.trunc(10 * Math.random()) )
  }
}

function setUp (taskAmount) {
  const paper = document.getElementById('paper')

  const buttonsBlock = document.createElement('div')
  buttonsBlock.classList.add('buttons-block')
  paper.appendChild(buttonsBlock)

  for (let i = 0; i < taskAmount; i++) {
    buttonsBlock.appendChild( document.createElement('button') )
    buttonsBlock.lastChild.classList.add('button')
    buttonsBlock.lastChild.textContent = `Task ${i + 1}`
    buttonsBlock.lastChild.addEventListener('click', eval(`taskFunction${i + 1}`)) //bad idea, but
  }
}
