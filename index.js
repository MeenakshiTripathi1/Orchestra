//Detecting Button Press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

      var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}


document.addEventListener("keypress", function(){

   makeSound(event.key);

   buttonAnimation(event.key);
});

//Detecting Keyboard Press
function makeSound(key){
    switch (key){
        case "w":
            var Tom1 = new Audio("tom-1.mp3");
            Tom1.play();
        break;

        case "a":
            var Tom2 = new Audio("tom-2.mp3");
            Tom2.play();
        break;
        
        case "s":
            var Tom3 = new Audio("tom-3.mp3");
            Tom3.play();
        break;

        case "d":
            var Tom4 = new Audio("tom-4.mp3");
            Tom4.play();
        break;
        
        case "j":
            var snare = new Audio("snare.mp3");
            snare.play();
        break;
        
        case "k":
            var crash = new Audio("crash.mp3");
            crash.play();
        break;
        
        case "l":
            var kick = new Audio("kick-bass.mp3");
            kick.play();
        break;

          
        default: console.log(buttonInnerHTML);
    }
}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." +currentKey);
    activeButton.classList.add("pressed");
     setTimeout(function() {
        activeButton.classList.remove("pressed");
     },100);
}