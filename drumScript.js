function play(letter){
  switch(letter){
    case "D":
      var audio = new Audio('./sounds/kick-bass.mp3');
      audio.play();
      break;
    case "F":
      var audio = new Audio('./sounds/tom-1.mp3');
      audio.play();
      console.log(data)
      break;
    case "G":
      var audio = new Audio('./sounds/tom-2.mp3');
      audio.play();
      break;
    case "H":
      var audio = new Audio('./sounds/tom-3.mp3');
      audio.play();
      break;
    case "J":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "K":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "L":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;



  }

  // var audio = new Audio('./sounds/kick-bass.mp3');
  // audio.play()
}

document.addEventListener("keyup", function(et){
  play(et.key.toUpperCase());
});
