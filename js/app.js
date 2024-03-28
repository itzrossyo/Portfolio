const arrow = document.querySelector('.arrow');
const work = document.querySelector('#work');


arrow.addEventListener('click', () => {
    work.scrollIntoView({ behavior: 'smooth' });
});

