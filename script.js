const toggleButton = document.getElementsByClassName("toggle-btn")[0]
const navbarLinks = document.getElementsByClassName("page-link")[0]

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active")
})