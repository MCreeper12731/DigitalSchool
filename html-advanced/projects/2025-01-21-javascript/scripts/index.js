function spremeni_temo() {

	const h1Element = document.querySelector("h1")
	const navbarElement = document.querySelector(".navbar")
	const bodyElement = document.querySelector("#body")

	h1Element.classList.remove("bg-dark")
	h1Element.classList.remove("text-white")
	h1Element.classList.add("bg-light")
	h1Element.classList.add("text-black")

	navbarElement.classList.remove("navbar-dark")
	navbarElement.classList.remove("bg-dark")
	navbarElement.classList.add("navbar-light")
	navbarElement.classList.add("bg-light")

	bodyElement.classList.remove("bg-dark")
	bodyElement.classList.remove("text-white")
	bodyElement.classList.add("bg-light")
	bodyElement.classList.add("text-black")

}