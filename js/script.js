let road = document.querySelector('.road');
let startscreen = document.querySelector('.start');
let stop = document.querySelector('.stop')
let mycar = document.querySelector('.mycar');
let score = document.querySelector('.score');
let jumpLeft = document.querySelector('.jumpleft')
let cscore = 0;
let time = 0;
let isplay = 0;
let jump = 0;
let jumpcount = 3;
document.addEventListener('keypress', function (e) {
    if (e.key == 'Enter' && isplay == 0) {
        road.classList.remove('hide');
        startscreen.classList.add('hide');
        score.classList.remove('hide');
        score.firstElementChild.innerHTML = 0;
        jumpLeft.firstElementChild.innerHTML = 3;
        jumpLeft.classList.remove('hide')
        play();

    }


})

document.addEventListener('keydown', function (e) {
    if (isplay == 1) {
        if (e.key == 'w' && mycar.offsetTop > 30) {
            mycar.style.top = mycar.offsetTop - 30 + 'px';
        }
        if (e.key == 'z' && mycar.offsetTop < screen.height + 300) {
            mycar.style.top = mycar.offsetTop + 30 + 'px';
        }
        if (e.key == 'a' && mycar.offsetLeft > 630) {
            mycar.style.left = mycar.offsetLeft - 30 + 'px';
        }
        if (e.key == 'd' && mycar.offsetLeft < 1250) {
            mycar.style.left = mycar.offsetLeft + 30 + 'px';
        }
        if (e.key == 's' && jump == 0 && jumpcount > 0) {
            jumpcar();
        }
    }
})

for (let i = 0; i < 10; i++) {
    let lines = document.createElement('div');
    lines.classList.add('line');
    lines.style.top = i * 140 + 'px'
    road.appendChild(lines)
}
for (let i = 0; i < 8; i++) {
    let car = document.createElement('div');
    let Url = 'url(./photo/' + Math.floor(Math.random() * 18) + '.png)'
    car.style.backgroundImage = Url

    car.classList.add('car');
    car.style.top = 100 - Math.random() * 3000 + 'px';
    car.style.left = 630 + i * 85 + 'px';

    let num = Math.floor(Math.random() * 7);

    road.appendChild(car);

}
let runI;
let carI;
let lineI;


function play() {
    document.documentElement.requestFullscreen()
    cscore = 0;
    time = 0;
    isplay = 1;
    jumpcount = 3;
    lineI = setInterval(moveline, 20);
    carI = setInterval(movecar, 30);
    let cars = Array.from(document.querySelectorAll('.car'));
    cars.forEach(element => {

        element.style.top = Math.random() * (-2000) + 'px';

    });
}
function moveline() {
    let lines = Array.from(document.querySelectorAll('.line'));

    lines.forEach(element => {

        if (element.offsetTop > 1440)
            element.style.top = -30 + 'px';
        else
            element.style.top = element.offsetTop + 5 + time / 200 + 'px';

    });
}
let s = 0;
function movecar() {
    if (time < 1000)
        time++;
    let cars = Array.from(document.querySelectorAll('.car'));
    cars.forEach(element => {
        issafe(element)
        if (element.offsetTop > 1240) {

            element.style.top = Math.random() * 500 - 550 + 'px';
            let Url = 'url(./photo/' + Math.floor(Math.random() * 18) + '.png)'
            element.style.backgroundImage = Url
        }
        else
            element.style.top = element.offsetTop + 10 + time / 100 + 'px';


    });
}
function jumpcar() {
    jumpcount--;
    jumpLeft.firstElementChild.innerHTML = jumpcount;
    jump = 1;
    mycar.style.transform = 'scale(1.6)';
    setTimeout(unjump, 350);
}
function unjump() {
    mycar.style.transform = 'scale(1)';
    jump = 0;
}
function reset() {

    clearInterval(runI);
    clearInterval(carI);
    clearInterval(lineI);

    isplay = 0;
    // 

    startscreen.firstElementChild.innerHTML = 'Game Over <br> Press Enter to restart'

    startscreen.classList.remove('hide')
    jumpLeft.classList.add('hide')


}
function issafe(e) {

    if (Math.abs(e.offsetTop - mycar.offsetTop) < 50 && Math.abs(e.offsetLeft - mycar.offsetLeft) < 42 && jump == 0)
        reset();
    else if (Math.abs(e.offsetTop - mycar.offsetTop) < 100) {
        cscore++;
        score.firstElementChild.innerHTML = cscore;
    }


}
