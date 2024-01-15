const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav_btn');
const navBtnImg = document.querySelector('#nav_btn_img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/header/nav_close.svg";
    } else {
        navBtnImg.src = "./img/header/nav_open.svg";
    }
}

AOS.init({
    once: true
});