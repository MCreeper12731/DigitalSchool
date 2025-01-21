function dodajObjavo() {

	const objaveElement = document.querySelector(".objave");
	const imeElement = document.querySelector("#name");
	const opisElement = document.querySelector("#description");

	const novaObjava = document.createElement("div");
	novaObjava.classList.add(...["bg-secondary", "text-light", "p-4", "rounded", "mt-2"]);

	const naslov = document.createElement("h1");
	naslov.innerHTML = imeElement.value;
	imeElement.value = "";

	const opis = document.createElement("p");
	opis.innerHTML = opisElement.value;
	opisElement.value = "";

	novaObjava.appendChild(naslov);
	novaObjava.appendChild(opis);

	objaveElement.appendChild(
		novaObjava
	);

}