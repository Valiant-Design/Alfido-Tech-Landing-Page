let navigation_bar = document.querySelector('.navbar');
let menus_btn = document.querySelector('.ri-menu-4-line');
let close_btn = document.querySelector('.ri-close-fill');
let home_click = document.querySelector('#home');

menus_btn.addEventListener('click', function() {
    navigation_bar.classList.add("active");
});

close_btn.addEventListener('click', function() {
    navigation_bar.classList.remove("active");
})

home_click.addEventListener('click', function() {
    navigation_bar.classList.remove("active");
})