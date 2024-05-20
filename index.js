document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navbarMenu = document.querySelector('.navbar-menu');

    menuIcon.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 576) {
            navbarMenu.classList.remove('active');
        }
    });
});


const slide = document.querySelector('.slide')
const btn = document.querySelectorAll('.btn')
const imageListArray = ["1","2","3","4"]
let index = 0

btn.forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.classList.contains("btn-left")){
            index--;
            if(index<0){
               index = imageListArray.length-1
            }
            slide.style.background = `url("images/${imageListArray[index]}.jpg") center/cover fixed no-repeat`
        }
        else{
            index++;
            if(index === imageListArray.length){
               index = 0
            }
            slide.style.background = `url("images/${imageListArray[index]}.jpg") center/cover fixed no-repeat`
        }
    })
})
