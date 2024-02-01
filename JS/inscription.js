function afficherFormulaire() {
    var formulaire = document.getElementById("formulaireInscription");
    formulaire.style.display = "block";
}
document.addEventListener('DOMContentLoaded', function() {
  

    // Gestionnaire d'événement pour le bouton Connexion
    document.getElementById('connexionButton').addEventListener('click', function() {
        // Rediriger vers la page de connexion
        window.location.href = 'connexion.html';
    });
});
