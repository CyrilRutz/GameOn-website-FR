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
    if (firstName.value.length < 3) {
      firstName.parentNode.setAttribute("data-error-visible","true");
} 
    if (lastName.value.length < 3) { 
      lastName.parentNode.setAttribute("data-error-visible","true");

} 
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
      eMail.parentNode.setAttribute("data-error-visible","true");
}
    if (!birthDate.value.match(dateFormat)) { 
      birthDate.parentNode.setAttribute("data-error-visible","true");
 }
    if (!quantityTournament.value.match(numbers)) { 
      quantityTournament.parentNode.setAttribute("data-error-visible", "true");
  
}

    if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
      loc1.parentNode.setAttribute("data-error-visible", "true");
    }
    if (!utilisation.checked){
      utilisation.parentNode.setAttribute("data-error-visible","true");
    }
send.preventDefault();
/*function formValidation(){
  const ids = ["first","last","email","quantity","birthDate","location1","location2","location3","location4","location5","location6"]
  const values = {}
  ids.forEach(function(id){
    const input =modalbg.querySelector("#"+id);
    if (input==null){
      return("merci de renseigner ce champ");
    }
    console.log(values.first.length);
    if (values.first.length <= 2){
      alert ("au moins trois caractères sont requis");
    }
    values [id] = input.value;
  };*/

}
