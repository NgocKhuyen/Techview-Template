const headerMenu = document.getElementById('header__menu-icon'); // icon mở
const toggleMenuIcon = document.getElementById('toggle-menu-icon'); // toggle ds
const closeMenuIcon = document.getElementById('close-menu-icon'); // icon đóng

document.addEventListener('click', (e) => {
    if (toggleMenuIcon.contains(e.target) || headerMenu.contains(e.target)) {
        return;
    }
    toggleMenuIcon.classList.remove('active');
});

headerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenuIcon.classList.toggle('active');
});

closeMenuIcon.addEventListener('click', (e) => {
    toggleMenuIcon.classList.remove('active');
});