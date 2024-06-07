const formular = document.querySelector('form')
const input = document.querySelector('input')

const odebirat = (event) => {

	event.preventDefault()
	const email = input.value
	formular.textContent = `Děkujeme za váš zájem. Těšte se na novinky ze světa frontendu a UX na vaší adrese ${email}.`
}

formular.addEventListener('submit', odebirat)

const check = () => {
    if (input.value === "") {
        input.classList.add("ramecek")
    } else if (input.value.includes("@") === false){
        input.classList.add("ramecek")
    } else {
        input.classList.remove("ramecek")
    }
}

input.addEventListener('input', check)