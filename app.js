document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const playerDisplay = document.querySelector('#player')

  let currentPlayer = 'playerX'

  squares.forEach(square => {
    square.addEventListener('click', clickOutcome)
  })

  function clickOutcome(e) {
    const squareArray = Array.from(squares)
    const index = squareArray.indexOf(e.target)
    playerDisplay.innerHTML = currentPlayer

    if(currentPlayer === 'playerX') {
      squares[index].classList.add('playerX')
      currentPlayer = 'playerO'
    } else {
      squares[index].classList.add('playerO')
      currentPlayer = 'playerX'
    }
  }

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(users => {
      console.log(users)
    })

})
