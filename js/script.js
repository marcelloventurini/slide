const slides = document.querySelector(".slide-items").children;
const nextSlide = document.querySelector(".next");
const prevSlide = document.querySelector(".prev");
const totalSlides = slides.length;
let counter = 0;

nextSlide.onclick = function () {
  changeSlide("next");
};

prevSlide.onclick = function () {
  changeSlide("prev");
};

function changeSlide(direction) {
  if (direction === "next") {
    counter++;
    if (counter === totalSlides) {
      counter = 0;
    }
  } else if (direction === "prev") {
    if (counter === 0) {
      counter = totalSlides - 1;
    } else {
      counter--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  
  slides[counter].classList.add("active");
}

// table

function newStore() {
  const table = document.getElementById("table");
  const storeInput = document.getElementById("storeinput").value;

  const row = table.insertRow();
  const cell = row.insertCell();
  cell.innerHTML = storeInput;

  clear();
}

function clear() {
  document.getElementById("storeinput").value = "";
}

// fav

function addFavoriteClass(index) {
  const fav = document.querySelectorAll(".favItem");

  fav[index].classList.toggle("favorite");
}
