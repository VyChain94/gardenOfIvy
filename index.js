const navToggle = document.querySelector('.navToggle');
const navLinks = document.querySelectorAll('.navLink')

navToggle.addEventListener('click', () => {
    // when we click on menu icon it'll toggle new class
    document.body.classList.toggle('navOpen');
});

//for each nav link we click, close navOpen
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('navOpen');
    })
})
