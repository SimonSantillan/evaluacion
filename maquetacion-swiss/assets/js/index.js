const casco = document.getElementById('check-casco');
const anillo = document.getElementById('check-anillo');
const next = document.getElementById('check-next');
const libro = document.getElementById('check-libro');


document.addEventListener('mouseover', (e) => {
  if (e.target.matches('#icon-casco')) {
    e.target.src = "assets/icon/icon-casco-hover.png";
    casco.src = "assets/icon/pointer-hover.png";
  }
  if (e.target.matches('#icon-next')) {
    e.target.src = "assets/icon/icon-prevnext-hover.png";
    next.src = "assets/icon/pointer-hover.png";
  }
  if (e.target.matches("#icon-libro")) {
    e.target.src = "assets/icon/icon-libro-hover.png";
    libro.src = "assets/icon/pointer-hover.png";
  }
  if (e.target.matches("#icon-anillo")) {
    e.target.src = "assets/icon/icon-anillo-hover.png";
    anillo.src = "assets/icon/pointer-hover.png";
  }
});
document.addEventListener('mouseout', (e) => {
  if (e.target.matches("#icon-casco")) {
    e.target.src = "assets/icon/icon-casco.png";
    casco.src = "assets/icon/pointer.png";
  }
  if (e.target.matches("#icon-next")) {
    e.target.src = "assets/icon/icon-nextprev.png";
    next.src = "assets/icon/pointer.png";
  }
  if (e.target.matches("#icon-libro")) {
    e.target.src = "assets/icon/icon-libro.png";
    libro.src = "assets/icon/pointer.png";
  }
  if (e.target.matches("#icon-anillo")) {
    e.target.src = "assets/icon/icon-anillo.png";
    anillo.src = "assets/icon/pointer.png";
  }
});