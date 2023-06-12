const navbar = document.querySelector('.items');
const btnToggle = document.querySelector('.btn-toggle');
navLink = document.querySelectorAll('.nav-link')


btnToggle.addEventListener('click' , () => {
    navbar.classList.toggle('active')
    btnToggle.classList.toggle('active')
})

navLink.forEach(n => n.addEventListener('click' , () => {
    navbar.classList.remove('active')
    btnToggle.classList.remove('active')
}))
