
// UI Elements 
const minNum = document.querySelector('.min-num')
const maxNum = document.querySelector('.max-num')
const guessInput = document.querySelector('#guess-input')
let guessBtn = document.querySelector('#guess-btn') 
let message = document.querySelector('.message')
let game = document.querySelector('#game')

// Game variables
let min = 1,
    max = 10, 
    winningGuess = getRandomNum(min, max)
    guessesLeft = 4

// Spans equal to min and max 
minNum.textContent = min
maxNum.textContent = max

// Play Again Event listener 
game.addEventListener('mousedown', (e)=>{
  if(e.target.className === 'play-again') {
      window.location.reload()
  }

})

// Listen for guess
guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value)


    // Validate 
    if(isNaN(guess) || guess < min || guess > max ) {
       setMessage(`Please enter a number between ${min} and ${max}` , 'red')
       return
    }

    // Check if won 
    if(guess === winningGuess) {
        gameOver(true, `${winningGuess} is correct YOU WIN!`)

    } else {
        // Wrong Number 
        guessesLeft -= 1
        if(guessesLeft === 0) {
           gameOver(false, `Game Over, you lost. The correct number was ${winningGuess}`)

        } else {
            // Clear Input 
            guessInput.value = ''
            // Game countinous answer wrong
            guessInput.style.borderColor = 'red'
            message.style.color = 'red'
           setMessage(`${guess} is not correct, ${guessesLeft} guesses left`)


        }
    }


})

// set message Function 
function setMessage(msg, color) {
    message.style.color = color
    message.textContent = msg
}

function gameOver(won,msg) {
    let color 
    won === true ? color = 'green' : color = 'red'
     // Disable Input
     guessInput.disabled = 'true'
     message.style.color = color
     // Change border color
     guessInput.style.borderColor = color
     // Set Message
     setMessage(msg)


    //  Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}


// Get Random num
function getRandomNum(min, max) {
    return (Math.floor(Math.random()* (max-min)+ 1) + min)
    
}
