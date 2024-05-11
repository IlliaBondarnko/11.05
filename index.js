const div = document.getElementById("parent")


div.addEventListener('click', onClick)

const img = document.querySelector(".target_picture")

function onClick(e) {
    console.log(e.target)
    const tag = e.target
    console.log(tag.src)
    if (e.target.nodeName !== "IMG") {
    return;
  }
    const img = document.querySelector("img"); 
    img.src = tag.src;
    img.style.height = "100%"
    img.style.width = "100%"
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
div.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


