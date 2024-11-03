let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Mengubah icon menjadi 'close'
    navbar.classList.toggle('active'); // Menampilkan atau menyembunyiakn navbar
    console.log("Menu toggle"); // Debugging
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
window.addEventListener ('resize', () => {
    if (window.innerWidth > 768){
        navbar.classList.remove('active');
        menu.classList.remove('bx-x');
    }
}); 