import figlet from "figlet"

figlet.text("ASCII Art \\o7", { font: "chunky" }, (error, text) => {
    console.log(text)
})