const header = document.querySelector('header');
const container = document.querySelector('.container');
const informationBlock = document.querySelectorAll('.information-block');
const informationTrip = document.querySelector('.information-trip');
const languageSVG = document.querySelector('.languageSVG ');

window.addEventListener('scroll', e => {

    console.log(languageSVG.src.co);

    if (scrollY > 120) {
        header.classList.add('fixed');
        container.classList.add('change');
        informationTrip.classList.add('min');
        languageSVG.src = './icons/language-24px-black.svg'
        informationBlock.forEach((item) => {
            item.classList.add('none')
        })
    } else {
        header.classList.remove('fixed');
        container.classList.remove('change');
        informationTrip.classList.remove('min');
        languageSVG.src = './icons/language-24px.svg'
        informationBlock.forEach((item) => {
            item.classList.remove('none')
        })
    }

})