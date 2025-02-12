let gallery = document.querySelector(".gallery")

let backButton = document.querySelector("#backButton");
let nextButton = document.querySelector("#nextButton");

let imageWidth = document.querySelector(".gallery img").offsetWidth;

backButton.addEventListener("click", (event) => {
	gallery.scrollLeft -= imageWidth;
});

nextButton.addEventListener("click", (event) => {
	gallery.scrollLeft += imageWidth;
});

gallery.addEventListener("wheel", (event) => {
	event.preventDefault();
	gallery.scrollLeft += imageWidth * (event.deltaY / Math.abs(event.deltaY));
})