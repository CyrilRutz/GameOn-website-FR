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
const loc2 = modalbg.querySelector ('#location2');
const loc3 = modalbg.querySelector ('#location3');
const loc4 = modalbg.querySelector ('#location4');
const loc5 = modalbg.querySelector ('#location5');
const loc6 = modalbg.querySelector ('#location6');
const utilisation = modalbg.querySelector ('#checkbox1')
const dateFormat = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/;
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

        const isFirstValid = firstName.value.length >= 3;
        const isLastValid = lastName.value.length >= 3;
        const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value);
        const isBirthdateValid = dateFormat.test(birthDate.value);
        const isQuantityTournamentValid = numbers.test(quantityTournament.value);
        const isLocValid = modalbg.querySelector("input[name=location]:checked") !== null;
        const isTrue = (currentValue) => currentValue === true;
        const isFalse  = (currentValue) => currentValue === false;
        const validationArray = [isFirstValid,isLastValid,isEmailValid,isBirthdateValid,isQuantityTournamentValid,isLocValid]
        if (validationArray.every(isTrue)){
            console.log("merci de votre participation")
        }
        else{
            validationArray.forEach(isFalse);
            this.parentNode.setAttribute("data-error-visible",true);

        }
send.preventDefault();

}
