const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const start = document.querySelector('.start')

let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
let hitPosition
let hit
let alreadyHit
let timeId = null
let timerId = null

start.addEventListener('click', startGame)

function randomSquare() {
    if(hit){
        hit.style.backgroundImage = ""
        alreadyHit = false
    }
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id
}

function startGame(){
    start.classList.remove('start')
    start.removeEventListener('click', startGame)
    
    timerId = setInterval(countDown, 1000)
    timeId = setInterval(randomSquare, 1000)
    square.forEach(id => {
        id.addEventListener('click', () => {
            if(id.id === hitPosition && !alreadyHit){
                result = result + 1
                score.textContent = result
                id.style.backgroundImage = "url('x.png')"
                hit = id
                alreadyHit = true
            }
        })
    })
}

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime < 0){
        clearInterval(timerId)
        clearInterval(timeId)
        alert('GAME OVER! Your final score is ' + result)
        start.classList.add('start')
        start.addEventListener('click', startGame)
        currentTime = 60
        timeLeft.textContent = currentTime
        document.querySelector('.mole').classList.remove('mole')
    }
}