
         document.getElementById("connexionForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Empêche l'envoi du formulaire

            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

            // regarder si ça fonctionne
            console.log("Email: " + email);
            console.log("Mot de passe: " + password);

            window.location.href = 'calendrier.html';
        });