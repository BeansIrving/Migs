const cards = document.querySelector(".card__inners");

cards.addEventListener("click", function (e) {
  cards.classList.toggle('is-flipped');
});