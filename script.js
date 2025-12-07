//Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

const message = document.querySelector('#minibox')

const interval = setInterval(() => {
	message.style.display = 'flex'
	setTimeout(() => {
		message.style.display = 'none'
	}, 500)
}, 1000)

setTimeout(() => {
	clearInterval(interval)
}, 6000)
//Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.
const animbox = document.querySelector('anim-box')
const firstblock = document.querySelector('.block')
const cyrcle = document.querySelector('.cycle')
const secondblock = document.querySelector('.block2')
const thirdblock = document.querySelector('.block3')

setInterval(() => {
	firstblock.style.transform = 'translate(100px, 350px)'
	secondblock.style.transform = 'translate(100px, -100px)'
	thirdblock.style.transform = 'translate(20px, 190px)'

	setTimeout(() => {
		firstblock.style.transform = 'translate(200px, 0px)'
		cyrcle.style.backgroundColor = 'red'
		secondblock.style.transform = 'translate(300px, 250px)'
		thirdblock.style.transform = 'rotate(185deg)'
	}, 1000)
	setTimeout(() => {
		firstblock.style.transform = 'translate(300px, 350px)'
		cyrcle.style.backgroundColor = 'green'
		secondblock.style.transform = 'translate(600px, -100px)'
	}, 2000)
	setTimeout(() => {
		firstblock.style.transform = 'translate(0px, 0px)'
	}, 3000)
}, 4000)
//Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.
const btn = document.querySelector('.btn')
const bt1 = document.querySelector('.bt1')
const bt2 = document.querySelector('.bt2')
const bt3 = document.querySelector('.bt3')
const bt4 = document.querySelector('.bt4')
const bt5 = document.querySelector('.bt5')
const scoreboard = document.querySelector('.scoreboard')
let score = 0
btn.addEventListener('click', () => {
	score += 1
	scoreboard.textContent = 'score: ' + score
})
bt2.addEventListener('click', () => {
	score += 1
	scoreboard.textContent = 'score: ' + score
})
bt3.addEventListener('click', () => {
	score += 1
	scoreboard.textContent = 'score: ' + score
})
bt4.addEventListener('click', () => {
	score += 1
	scoreboard.textContent = 'score: ' + score
})
bt5.addEventListener('click', () => {
	score += 1
	scoreboard.textContent = 'score: ' + score
})
//Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.
const input = document.querySelector('.input')
const startTimerBtn = document.querySelector('.start-timer')
const timerMsg = document.querySelector('.message')
startTimerBtn.addEventListener('click', () => {
	let time = input.value * 1000
	setTimeout(() => {
		timerMsg.textContent = 'время вийшло!'
		timerMsg.style.color = 'red'
	}, time)
})
