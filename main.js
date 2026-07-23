/* ==========================================
   GABARIT COMMUN PHYSIQUE-CHIMIE CRMEF
   JavaScript principal - Version V2
========================================== */


/* Récupération des boutons et des sections */

const buttons = document.querySelectorAll(".tab-button");

const contents = document.querySelectorAll(".tab-content");



/*
   Fonction d'affichage d'un onglet
*/

function showTab(tabId, selectedButton) {


    // Masquer toutes les sections

    contents.forEach(function(content) {

        content.style.display = "none";

    });



    // Retirer l'état actif des boutons

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });



    // Afficher la section choisie

    const selectedContent = document.getElementById(tabId);


    if (selectedContent) {

        selectedContent.style.display = "block";

    }



    // Ajouter l'état actif au bouton choisi

    if (selectedButton) {

        selectedButton.classList.add("active");

    }

}




/*
   Gestion des clics sur les onglets
*/

buttons.forEach(function(button) {


    button.addEventListener("click", function() {


        const tab = this.getAttribute("data-tab");


        showTab(tab, this);


    });


});





/*
   Affichage initial :
   Onglet Accueil actif
*/


showTab("accueil", buttons[0]);