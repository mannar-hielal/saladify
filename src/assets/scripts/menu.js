export function menu() {
  // get top nav
  let topNav = document.getElementById("myTopNav");
  // get the burger menu
  let bars = document.getElementById("bars");

  // get the close button
  let close = document.getElementById("closeBtn");

  // hook the icons with eventlistener that does some styling
  bars.addEventListener("click", slideDownNav);
  close.addEventListener("click", slideUpNav);

  function slideDownNav() {
    topNav.style.height = "100%";
    topNav.style.paddingTop = "8rem";
    bars.style.display = "none";
    close.style.display = "block";

    // slide up to show the navigated page
    // if the topNap is 100%
    if (topNav.style.height == "100%") {
      topNav.addEventListener("click", slideUpNav);
    }
  }

  function slideUpNav() {
    topNav.style.height = "0";
    topNav.style.paddingTop = "0";
    bars.style.display = "block";
    close.style.display = "none";
  }
}
