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
    document.querySelectorAll(".toggle-password").forEach(icon => {
        icon.addEventListener("click", function () {
            let input = document.getElementById(this.getAttribute("data-target"));
            if (input) {
                input.type = input.type === "password" ? "text" : "password";
                this.classList.toggle("fa-eye-slash");
                this.classList.toggle("fa-eye");
            }
        });
    });
});
// Register vs login
const currentPage = window.location.pathname;
// Duyệt qua tất cả các link có class "auth-link"
document.querySelectorAll(".auth-link").forEach(link => {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");   
    }
});
// 
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".title-info");
    const sections = document.querySelectorAll(".content-section");

    // Mặc định đặt "Thông tin tài khoản" là active
    tabs[0].classList.add("section-active");
    sections[0].classList.add("section-active");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", function () {
            // Xóa class section-active khỏi tất cả
            tabs.forEach(t => t.classList.remove("section-active"));
            sections.forEach(s => s.classList.remove("section-active"));

            // Thêm class section-active vào phần tử được click
            this.classList.add("section-active");
            sections[index].classList.add("section-active");
        });
    });
});
// modal
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal_address");
    const overlay = document.querySelector(".modal_overlay");
    const btnAdd = document.querySelector(".btn-address");
    const btnEdit = document.querySelector(".btn-edit");
    const btnClose = document.querySelectorAll(".close-modal");
    const btnSubmit = document.querySelector(".btn-add");
    const title = document.querySelector(".title-address");

    function openModal(mode) {
        modal.style.display = "block";
        overlay.style.display = "block";

        if (mode === "add") {
            title.textContent = "THÊM ĐỊA CHỈ";
            btnSubmit.textContent = "THÊM ĐỊA CHỈ";
        } else {
            title.textContent = "CẬP NHẬT ĐỊA CHỈ";
            btnSubmit.textContent = "CẬP NHẬT ĐỊA CHỈ";
        }
    }

    function closeModal() {
        modal.style.display = "none";
        overlay.style.display = "none";
    }

    btnAdd.addEventListener("click", function () {
        openModal("add");
    });

    btnEdit.addEventListener("click", function () {
        openModal("edit");
    });

    btnClose.forEach(btn => btn.addEventListener("click", closeModal));

    overlay.addEventListener("click", closeModal);
});

