// Fonction pour faire défiler le carrousel d'images avec une meilleure fluidité
function slideCarousel() {
  const sliderContainer = document.querySelector('.slider-container');
  const images = document.querySelectorAll('.slider-container img');
  const imageWidth = images[0].clientWidth;
  let counter = 0;

  setInterval(() => {
      counter++;
      if (counter >= images.length) {
          counter = 0;
      }

      sliderContainer.style.transition = 'transform 0.8s ease-in-out';
      sliderContainer.style.transform = `translateX(${-imageWidth * counter}px)`;
  }, 3000); // Changer l'intervalle de temps (en millisecondes) pour contrôler la vitesse de défilement
}

// Appel de la fonction slideCarousel une fois que la page est chargée
window.onload = slideCarousel;
