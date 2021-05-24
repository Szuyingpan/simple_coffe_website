console.log("hello")

let count=0;
//step
//1. identify and select the button
let button; 
let colorButton;
let backgroundColor=["#ffff00","#ee82ee","#4682b4","#ff6347"]
let choice=0

button= document.getElementById('button');
console.log(button);

//2. listen to event click on the button
button.addEventListener("click",increaseCounter);

//3. increase the number in the counter
function increaseCounter(){
    count+=1;
    document.getElementById('counter').innerHTML=count;
}

//button to change the background color
colorButton=document.getElementById('button_color');

colorButton.addEventListener("click",function(){
    console.log('Change Color');
    document.body.style.background=backgroundColor[choice];
    choice=(choice+1)%4;

})

//scrolling on the window
window.addEventListener("scroll",function(){
    console.log(window.scrollY);
    document.body.style.background="hsl("+window.scrollY%360+",50%,50%)";
})
