const foto = document.querySelector(".fill");
const kutular = document.querySelectorAll(".empty");

foto.addEventListener("dragstart", dragStart);
foto.addEventListener("dragend", dragEnd);

kutular.forEach((element) => {
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}
function dragDrop() {
  this.className = "empty";
  this.append(foto);
}
