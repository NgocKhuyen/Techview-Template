// menu category
document.querySelector(".header__menu-category").addEventListener("click", function () {
    document.querySelector(".header__list").classList.toggle("active");
});
// slider 
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) return; 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

// hidden password
document.addEventListener("DOMContentLoaded", function () {
    let toggleIcons = document.querySelectorAll(".toggle-password");

    toggleIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            let input = document.getElementById(this.getAttribute("data-target"));

            if (input.type === "password") {
                input.type = "text";
                this.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                input.type = "password";
                this.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    });
});