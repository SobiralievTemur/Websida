var ljud = document.getElementById("ljud")
var icon = document.getElementById("icon")

icon.onclick = function() {
  
  if (ljud.paused) {
    ljud.play();
    icon.src = "Bilder/pause.png";
    ljud.loop = true;
  } 
  
  else {
    ljud.pause();
    icon.src = "Bilder/play.png";
  }
}