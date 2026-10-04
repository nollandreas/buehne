// Sidebar functions, used in all HTML files
function w3_open() {
  const width = window.innerWidth <= 600 ? "80vw" : "25%";
  document.getElementById("mySidebar").style.width = width;
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}