document.addEventListener('DOMContentLoaded', function() {
  $('.banner-carousel').slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
      arrows: false
  });
});
  
var tarifButton = document.querySelector('.renvoi-tarif');

    if (tarifButton) {
      tarifButton.addEventListener('click', function() {
        // Rediriger vers la page tarif.html
        window.location.href = '../page/tarif.html';
      });
    }