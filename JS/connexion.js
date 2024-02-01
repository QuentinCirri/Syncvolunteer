document.getElementById('inscriptionButton').addEventListener('click', function() {
    // Rediriger vers la page d'inscription
    window.location.href = '../page/inscription.html';
});
        document.getElementById("connexionForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire

            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // regarder si ça fonctionne
            console.log("Email: " + email);
            console.log("Mot de passe: " + password);

            // ajout d'une redirection de page (calendrier.html)
            window.location.href = 'calendrier.html';
        });