let home = 0
let guest = 0

let homeEl = document.getElementById('score-home')
let guestEl = document.getElementById('score-guest')
let homeTitleEl = document.getElementById('home-title')
let guestTitleEl = document.getElementById('guest-title')

homeEl.textContent = home
guestEl.textContent = guest
homeTitleEl.textContent = 'HOME'
guestTitleEl.textContent = 'GUEST'

function checkWinner() {
  if (home > guest) {
  homeTitleEl.style.color = '#fff131'
} else if (home < guest) {
  guestTitleEl.style.color = '#fff131'
} else {
  homeTitleEl.style.color = '#fff'
  guestTitleEl.style.color = '#fff'
}
}

function homeAdd1() {
  home = home + 1
  homeEl.textContent = home
  checkWinner()
}

function homeAdd2() {
  home = home + 2
  homeEl.textContent = home
  checkWinner()
}

function homeAdd3() {
  home = home + 3
  homeEl.textContent = home
  checkWinner()
}

function guestAdd1() {
  guest = guest + 1
  guestEl.textContent = guest
  checkWinner()
}

function guestAdd2() {
  guest = guest + 2
  guestEl.textContent = guest
  checkWinner()
}

function guestAdd3() {
  guest = guest + 3
  guestEl.textContent = guest
  checkWinner()
}

function clearScore() {
  home = 0
  guest = 0

  homeEl.textContent = 0
  guestEl.textContent = 0

  homeTitleEl.style.color = '#fff'
  guestTitleEl.style.color = '#fff'
}