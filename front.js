
function SaibaMais(){
    // JOGO QUE ESTA NO "DESTAQUE PAGINA"
}

function JogoDestaque(){

    
}

function item1(){
    // JOGO QUE ESTA NO "ITEM 1"
}

function item2(){
    // JOGO QUE ESTA NO "ITEM 2"
}

function LinckInstagram(){
    window.open('https://www.instagram.com/tarcksgames/');
}

function LinckPlayStory(){
    window.open('https://play.google.com/store/apps/dev?id=7531183554578649479');
}

function LoneWolf(){
    window.open('https://play.google.com/store/apps/details?id=com.Guilherme.TARCKS');
}


function Carrossel()
{
}

/*SLIDER TARCKS*/
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')

let currentSlider = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlider].classList.add('on')
}

function nextSlider(){
    hideSlider()
    if(currentSlider == slider.length -1){
        currentSlider = 0
    }else{
        currentSlider++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()
    if(currentSlider == 0){
        currentSlider = slider.length -1
    }else{
        currentSlider--
    }
    showSlider()
}

btnNext.addEventListener('click', prevSlider)
btnPrev.addEventListener('click', nextSlider)