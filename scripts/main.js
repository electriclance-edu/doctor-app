const database = new Database();

function triggerScreen(screenId) {
  const screens = document.getElementById("screenParent").children;
  console.log(screens);
  
  for (screen in screens) {
    console.log(screen);
    screen.style.opacity = 0;
    screen.style.pointerEvents = "none";
  }

  document.getElementById(screenId).style.opacity = 1;
  document.getElementById(screenId).style.pointerEvents = "all";
}