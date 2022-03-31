
// const btnNew  = document.querySelector('.btn--new') 
// const btnRoll = document.querySelector('.btn--roll')
// const btnHold = document.querySelector('.btn--hold')
// const dice = document.querySelector('.dice')
// // const current0 =document.querySelector('#current--0')
// // const current1 =document.querySelector('#current--1')


// let currentScore = 0
// let activePlayer = 0
// const totalScore = [0, 0]
// const gameOver = false

// dice.style.display = 'none'

// btnRoll.addEventListener('click', ()=>{
//     if(!gameOver){
//         dice.style.display = 'block'
//     const randomDice = Math.floor(Math.random() *6 +1)
//     dice.src =`dice-${randomDice}.png`
//     currentScore += randomDice
//     document.querySelector(`#current--${activePlayer}`).textContent = currentScore
//     if(randomDice == 1){
//         switchPlayer()
//     }
//     }
// })

// btnHold.addEventListener('click', ()=>{
//    if(!gameOver){
//     totalScore[`${activePlayer}`] += currentScore
//     document.querySelector(`#score--${activePlayer}`).textContent = totalScore[`${activePlayer}`]
//     if(totalScore[`${activePlayer}`] >= 20){
//         gameOver= true
//         document.querySelector('.player--0').classList.remove('player--active')
//         document.querySelector('.player--1').classList.remove('player--active')
//         document.querySelector(`.player--${activePlayer}`).classList.add('.player--winner')
     
// }else{
//     switchPlayer()
// }
//    }
// })

// function switchPlayer(){
//     document.querySelector(`#current--${activePlayer}`).textContent = 0
//     activePlayer = activePlayer ==0 ? 1 : 0
//     currentScore = 0
//     document.querySelector('.player--0').classList.toggle('player--active')
//     document.querySelector('.player--1').classList.toggle('player--active')
// }


// ----------------------------------------------



const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
// const current0 = document.querySelector('#current--0')
// const current1 = document.querySelector('#current--1')
const dice = document.querySelector('.dice')

dice.style.display = "none"
let currentScore = 0
let activePlayer = 0
let totalScore = [0,0]
let gameOver =false


btnRoll.addEventListener('click', ()=>{
   if(!gameOver){
    dice.style.display = "block"
    const randomDice = Math.floor(Math.random() *6+1)
    dice.src = `dice-${randomDice}.png`

    currentScore += randomDice
  document.querySelector(`#current--${activePlayer}`).textContent = currentScore
  if(randomDice == 1){
      switchPlayer()
      
   }
   }
})

 btnHold.addEventListener('click', ()=>{
     totalScore[`${activePlayer}`] += currentScore
     document.querySelector(`#score--${activePlayer}`).textContent = totalScore[`${activePlayer}`]
     if(totalScore[`${activePlayer}`] >= 20) {
         gameOver = true
         document.querySelector('.player--0').classList.remove('player--active')
         document.querySelector('.player--1').classList.remove('player--active')
         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
     } else {
        switchPlayer()
     }    
    }
)

  function switchPlayer(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0

    activePlayer = activePlayer == 0 ? 1 :0
    currentScore = 0
    document.querySelector('.plyer--0').classList.toggle('player--active')
    document.querySelector('.plyer--1').classList.toggle('player--active')

 }

 btnNew.addEventListener('click', ()=>{
    dice.style.display = "none"
    currentScore = 0
    activePlayer = 0
    totalScore = [0,0]
    gameOver =false
    document.querySelector(`.player--0`).classList.remove('player--active', 'player--winner')
    document.querySelector(`.player--1`).classList.remove('player--active' ,'player--winner')
    document.querySelector('#score--0').textContent = 0
    document.querySelector('#score--1').textContent = 0
    document.querySelector('#current0--0').textContent = 0
    document.querySelector('#current0--1').textContent = 0
    document.querySelector(`.player--1`).classList.add('player--active')

}) 