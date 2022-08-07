/* HAMBORGA NAVIGATION*/
const ham = document.getElementById('hamborgerIcon');
const nav = document.querySelector('.navigation');
const hamClose = document.querySelector('.hamClose');
ham.addEventListener('click',()=>{
nav.classList.add('navActive');
});
hamClose.addEventListener('click',()=>{
    nav.classList.remove('navActive');
    });


