document.addEventListener('DOMContentLoaded', function() {
    var liens = document.querySelectorAll('.barnav a');

    liens.forEach(function(lien) {
        lien.addEventListener('mouseover', function() {
            this.style.color = '#468D80';
        });

        lien.addEventListener('mouseout', function() {
            this.style.color = ''; 
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var motsNavbar = document.querySelectorAll('.barnav a');

    motsNavbar.forEach(function(mot) {
        mot.addEventListener('mouseover', function() {
            this.style.fontSize = '18px';
        });

        mot.addEventListener('mouseout', function() {
            this.style.fontSize = '';
        });
    });
});