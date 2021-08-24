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
const thankYou = document.querySelector(".modal-confirmation")
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = modalbg.querySelector(".close");
const modalValidation = modalbg.querySelector("form[name=reserve]");
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
    thankYou.style.display = "flex";

}
//validation du formulaire
modalValidation.addEventListener("submit", formValidation);

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
    const isUseTermsChecked = utilisation.checked===true;
    const validationArray = [
        {input : firstName,data: isFirstValid},
        {input : lastName,data: isLastValid},
        {input : eMail,data: isEmailValid},
        {input : birthDate,data: isBirthdateValid},
        {input : quantityTournament,data: isQuantityTournamentValid},
        {input : loc1,data: isLocValid},
        {input : utilisation , data :isUseTermsChecked}
    ];

    if (validationArray.every((currentValue) => currentValue.data === true)) {

        closeForm();
        clearFormInputs();
        return;
    }
    showErrorMessages(validationArray);

}
// Retirer les messages d'erreur
function clearErrorMessages(formInputs){
    formInputs.forEach(function (currentValue){
        currentValue.dataset.errorVisible = "false";
    });
}
//Afficher les erreurs
function showErrorMessages(validateArray){
    validateArray.forEach(function (currentValue){
        if (currentValue.data === false){
            currentValue.input.closest(".formData").dataset.errorVisible = "true";
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