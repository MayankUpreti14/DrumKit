var numberOfButtons = document.querySelectorAll(".drum").length;

function play(action){
  switch(action){
    case "w":
        var sound = new Audio("sounds/tom-1.mp3");
        sound.play();
      break;
    case "a":
        var sound = new Audio("sounds/tom-2.mp3");
        sound.play();
      break;
    case "s":
        var sound = new Audio("sounds/tom-3.mp3");
        sound.play();
      break;
    case "d":
        var sound = new Audio("sounds/tom-4.mp3");
        sound.play();
      break;
    case "j":
        var sound = new Audio("sounds/snare.mp3");
        sound.play();
      break;
    case "k":
        var sound = new Audio("sounds/crash.mp3");
        sound.play();
      break;
    case "l":
        var sound = new Audio("sounds/kick-bass.mp3");
        sound.play();
      break;
  default: console.log("button");
  }
};

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
};

for (var i = 0; i<numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var button = this.innerHTML;
    play(button);
    buttonAnimation(button);
  });
}

document.addEventListener("keydown", function(event){
  play(event.key);
  buttonAnimation(event.key);
});
