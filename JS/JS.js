// Assurez-vous que le DOM est chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    // Initialisez le carrousel Slick ici
    $('.banner-carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false
    });
  });
  