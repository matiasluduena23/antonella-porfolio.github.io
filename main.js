const navbar = document.querySelector('.items');
const btnToggle = document.querySelector('.btn-toggle');
const navLink = document.querySelectorAll('.nav-link')
const navigationHeight = document.querySelector('#nav').offsetHeight;


btnToggle.addEventListener('click' , () => {
    navbar.classList.toggle('active')
    btnToggle.classList.toggle('active')
})

navLink.forEach(n => n.addEventListener('click' , () => {
    navbar.classList.remove('active')
    btnToggle.classList.remove('active')
}))


document.documentElement.style.setProperty('--scroll-padding', navigationHeight - 1 +'px');
