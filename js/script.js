let road=document.querySelector('.road');
let startscreen=document.querySelector('.start');
let stop=document.querySelector('.stop')
let mycar=document.querySelector('.mycar');
let score=document.querySelector('.score');
let cscore=0;
let time=0;

document.addEventListener('keypress',function(e){
     if(e.key=='Enter') {
          road.classList.remove('hide');
    startscreen.classList.add('hide');
    score.classList.remove('hide');
    score.firstChild.innerHTML=0;
    
    play();
  
}
 
    
})

document.addEventListener('keydown',function(e){
     if(e.key=='w'&& mycar.offsetTop>30){
    mycar.style.top=mycar.offsetTop-30+'px';}
    if(e.key=='z'&&mycar.offsetTop<900){
        mycar.style.top=mycar.offsetTop+30+'px';
  }
  if(e.key=='a'&&mycar.offsetLeft>630){
    mycar.style.left=mycar.offsetLeft-30+'px';
}
if(e.key=='d'&&mycar.offsetLeft<1250){
    mycar.style.left=mycar.offsetLeft+30+'px';
}
})

for(let i=0;i<7;i++){
    let lines=document.createElement('div');
    lines.classList.add('line');
    lines.style.top=i*140+'px'
    road.appendChild(lines)
}
for(let i=0;i<8;i++){
    let car=document.createElement('div');
    let Url='url(./photo/'+Math.floor(Math.random()*18)+'.png)'
    car.style.backgroundImage=Url

    car.classList.add('car');
    car.style.top=100-Math.random()*3000+'px';
    car.style.left=630+i*85+'px';
    
    let num= Math.floor(Math.random()*7);
    
    road.appendChild(car);
   
}
let runI;
let carI;
let lineI;


function play (){
    cscore=0;
    time=0;
    lineI=  setInterval(moveline,20);
    carI =setInterval(movecar,30);
    let cars=Array.from(document.querySelectorAll('.car'));
    cars.forEach(element => {
      
        element.style.top=Math.random()*(-2000)+'px';
        
    });
}
function moveline(){
    let lines=Array.from(document.querySelectorAll('.line'));
    
    lines.forEach(element => {
        
        if(element.offsetTop>940)
        element.style.top=-40+'px';
        else
        element.style.top=element.offsetTop+5+time/200+'px';
        
    });
}
let s=0;
function movecar(){
    if(time<1000)
    time++;
    let cars=Array.from(document.querySelectorAll('.car'));
    cars.forEach(element => {
        issafe(element)
        if(element.offsetTop>940){

        element.style.top=Math.random()*1000-1000+'px';
        let Url='url(./photo/'+Math.floor(Math.random()*18)+'.png)'
        element.style.backgroundImage=Url
    }
        else
        element.style.top=element.offsetTop+10+time/100+'px';
  
        
    });
}
function reset(){

    clearInterval(runI);
    clearInterval(carI);
    clearInterval(lineI);
    
    
    startscreen.classList.remove('hide')
}
function issafe(e){
   
    if(Math.abs(e.offsetTop-mycar.offsetTop)<50 && Math.abs(e.offsetLeft-mycar.offsetLeft)<50)
   reset();
   else  if(Math.abs(e.offsetTop-mycar.offsetTop)<100){
       cscore++;
    score.firstChild.innerHTML=cscore;
   }


}
