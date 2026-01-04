function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
    document.querySelector(".menu-btn").style.display = "none";
    document.getElementById("menu").style.display="block"
}
    //hide menu
function closeMenu() {
    document.getElementById("menu").classList.remove("show");
    document.querySelector(".menu-btn").style.display = "block";
    document.getElementById("menu").style.display="none"
}
document.querySelectorAll('#menu').forEach(link => {
    link.addEventListener('click', closeMenu);
});