

document.getElementById("main").style.display = 'block';

let pages = {
    photography: "photography",
    wunderblock: "wunderblock",
    paintings: "paintings",
    drawings: "drawings",
    about: "about",
    contact: "contact",
    portfolio: "portfolio",
    main: "main"
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
