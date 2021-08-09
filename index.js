
   //detecting button press
var numberofbutton=document.querySelectorAll(".drum").length;
for(var i=0;i<numberofbutton;i++){//you can write i<=7 to it works

 
document.querySelectorAll(".drum")[i].addEventListener("click",function() {
 
    var buttoninnerHtml = this.innerHTML;

     makeSound(buttoninnerHtml);
     buttonanimation(buttoninnerHtml);

});
}
//detecting keyboard press
document.addEventListener("keydown",function(event){

    makeSound(event.key);//key is the keyword not the variable
buttonanimation(event.key);
});


function makeSound(sound){


    switch(sound){

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a":
           var tom2 = new Audio("sounds/tom-2.mp3");
           tom2.play();
       break;
       case "A":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
    break;
       case "s":
           var tom3 = new Audio("sounds/tom-3.mp3");
           tom3.play();
       break;
       case "S":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
    break;
       case "d":
           var tom4 = new Audio("sounds/tom-4.mp3");
           tom4.play();
       break;
       case "D":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
    break;
       case "j":
           var snare = new Audio("sounds/snare.mp3");
           snare.play();
       break;
       case "J":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
    break;
       case "k":
           var crash = new Audio("sounds/crash.mp3");
           crash.play();
       break;
       case "K":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
    break;
       case "l":
           var kick_bass = new Audio("sounds/kick-bass.mp3");
           kick_bass.play();
       break;
       case "L":
        var kick_bass = new Audio("sounds/kick-bass.mp3");
        kick_bass.play();
    break;
   }
    
}

function buttonanimation(currentkey){

var activebutton = document.querySelector("." + currentkey);

activebutton.classList.add("pressed");

setTimeout(function(){
    activebutton.classList.remove("pressed");
},100);

}