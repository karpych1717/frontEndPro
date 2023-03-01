'use strict'

const taskFunctions = [taskFunction1]
window.onload = () => setUpButtons(taskFunctions)

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

function setUpButtons (taskFunctions) {
  const paper = document.getElementById('paper')

  const buttonsBlock = document.createElement('div')
  buttonsBlock.classList.add('buttons-block')

  for (let i = 0; i < taskFunctions.length; i++) {
    buttonsBlock.appendChild( createButton(`Task ${i + 1}`, taskFunctions[i]) )
  }

  paper.appendChild(buttonsBlock)
}

function createButton (name, taskFunction) {
  const button = document.createElement('button')
    
  button.classList.add('button')
  button.textContent = name
  button.addEventListener('click', taskFunction)

  return button
}