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
const firstName = document.getElementById ('first');
const lastName = document.getElementById ('last');
const eMail = document.getElementById ('email');
const birthDate = document.getElementById ('birthdate');
const quantityTournament = document.getElementById ('quantity');
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');

const dateFormat = /^\d{2}[./-]\d{2}[./-]\d{4}$/;
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
function formValidation(){
    if (firstName.length < 3) {
  alert ("Ce champ doit contenir au moins 3 caractères");
  return false;
} 
    if (lastName.length < 3) { 
  alert ("Ce champ doit contenir au moins 3 caractères");
  return false;
} 
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(eMail.value)) { 
  alert ("Veuillez remplir le champ email");
  return false;
}
    if (!birthDate.value.match(dateFormat)) { 
   alert ("Veuillez remplir votre date d'anniversaire");
  return false;
 }
    if (!quantityTournament.value.match(numbers)) { 
  alert ("Veuillez indiquer le nombre de tournois");
  return false;
}

    if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) { 
  alert ("Veuillez choisir une ville");
  return false;

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
    values [id] = input.value;*/
  };


  //tester la valeur

  //stocker le résultat du test  
  //passer a la suivante 
  //vérifier si un des résultat n'est pas bon 
  //si pas bon message d'erreur en dessous du champ concerné 

  //recommencer pour chaque champ 
}
