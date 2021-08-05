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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//ce que j'ai ajouté 
//close modal event la modale étant a l'origine en display none il faut rétablir l'état initial en cliquant sur close 
modalClose.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}
//validation du formulaire
modalValidation.addEventListener("click", formValidation);
function formValidation(send){
    //add error visible attribute
    formData.forEach(function (currentValue){
        currentValue.dataset.errorVisible = "false";
        console.log(formData);
    });
        const isFirstValid = firstName.value.length >= 3;
        const isLastValid = lastName.value.length >= 3;
        const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value);
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
            console.log("merci de votre participation");
            return;
        }
             validationArray.forEach(function (currentValue){
                 if (currentValue.data === false){
                     currentValue.input.parentNode.dataset.errorVisible = "true";
                     console.log(formData);
                 }
             });
    send.preventDefault();

}
