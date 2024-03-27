

document.getElementById("main").style.display = 'block';

let pages = {
    main: "main",
    photography: "photography",
    wunderblock: "wunderblock",
    paintings: "paintings",
    drawings: "drawings",
    portfolio: "portfolio",
    about: "about",
    contact: "contact",
}

function page(s) {
    if (pages[s] != null) {
        hide(document.querySelectorAll('.page'));
        document.getElementById(pages[s]).style.display = 'block';
    }
}

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}
