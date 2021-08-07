function editNav() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalForm = document.querySelector(".modal-body")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//ce que j'ai ajouté 
const modalClose = modalbg.querySelector(".close");
const modalValidation = modalbg.querySelector(".btn-submit");
const firstName = modalbg.querySelector ('#first');
const eMail = modalbg.querySelector ('#email');
const lastName = modalbg.querySelector ('#last');
const birthDate = modalbg.querySelector ('#birthdate');
const quantityTournament = modalbg.querySelector ('#quantity');
const loc1 = modalbg.querySelector ('#location1');
const utilisation = modalbg.querySelector ('#checkbox1')
const dateFormat = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
const numbers = /^[0-9]+$/;
const mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


function launchModal() {
    modalbg.style.display = "block";
}

modalClose.addEventListener("click", closeModal);
function closeModal() {
    modalbg.style.display = "none";
}
function closeForm() {
    modalForm.style.display = "none";
};
//validation du formulaire
modalValidation.addEventListener("click", formValidation);

function formValidation(send){
    send.preventDefault();

    // Effacer les messages d'erreurs
    clearErrorMessages(formData);
    const isFirstValid = firstName.value.length >= 3;
    const isLastValid = lastName.value.length >= 3;
    const isEmailValid = mail.test(eMail.value);
    const isBirthdateValid = dateFormat.test(birthDate.value);
    const isQuantityTournamentValid = numbers.test(quantityTournament.value);
    const isLocValid = modalbg.querySelector("input[name=location]:checked") !== null;
    const isUsetermsChecked = utilisation.checked===true;
    const validationArray = [
        {input : firstName,data: isFirstValid},
        {input : lastName,data: isLastValid},
        {input : eMail,data: isEmailValid},
        {input : birthDate,data: isBirthdateValid},
        {input : quantityTournament,data: isQuantityTournamentValid},
        {input : loc1,data: isLocValid},
        {input : utilisation , data :isUsetermsChecked}
    ];


    if (validationArray.every((currentValue) => currentValue.data === true)) {

        /*
         Si tout se passe bien
            - Réinitialiser les champs du formulaire
            - Fermer la modal
         */

        closeForm();
        clearFormInputs();
        return;
    }

    // Appel de la fonction d'affichage des erreurs
    showErrorMessages(validationArray)

}
// Fonction responsable de rétirer les messages d'erreur
function clearErrorMessages(formInputs){
    formInputs.forEach(function (currentValue){
        currentValue.dataset.errorVisible = "false";
    });
}
//Fonction responsable d'afficher les erreurs
function showErrorMessages(validateArray){
    validateArray.forEach(function (currentValue){
        if (currentValue.data === false){
            currentValue.input.parentNode.dataset.errorVisible = "true";
        }
    });
}
function clearFormInputs(){
    firstName.value="";
    lastName.value="";
    eMail.value="";
    birthDate.value="";
    quantityTournament.value="";
    loc1.value="";
}