const arrowButton = document.querySelector("#arrowButton")

arrowButton.addEventListener("click", () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
})