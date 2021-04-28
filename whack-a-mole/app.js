const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition

function randomSquare() {
    if(hit){
        hit.style.backgroundImage = ""
    }
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

let hit

square.forEach(id => {
    id.addEventListener('click', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
            id.style.backgroundImage = "url('red.png')"
            hit = id
        }
    })
})

function moveMole(){
    let timerId = null
    timeId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)