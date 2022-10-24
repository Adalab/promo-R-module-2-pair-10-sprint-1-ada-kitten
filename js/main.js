"use strict";

const urlArticle1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
let name1 = "Anastacio";
name1 = name1.toUpperCase();
const description1 = "Risueño, cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
let race1 = "";

const urlArticle2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
let name2= "Fiona";
name2 = name2.toUpperCase();
const description2 = "Risueño, cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const race2 = "British Shorthair";

const urlArticle3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
let name3= "Cielo";
name3 = name3.toUpperCase();
const description3 = "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const race3 = "British Shorthair";

// funciones ver y ocultar formulario

//Ocultar/ver formulario y Mostar/ocultar formulario
const form = document.querySelector(".js-new-form"); 
const icon = document.querySelector('.icon');

icon.addEventListener('click', (event) => {
  event.preventDefault();
  if (form.classList.contains("collapsed")){
    form.classList.remove("collapsed");
  }
  else{
    form.classList.add("collapsed");
  }
});

// Boton añadir y validar formulario gatito
const button = document.querySelector('.js-btn-add');
const inputRace = document.querySelector('.js-input-race');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

button.addEventListener('click', (event)=>{
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;

  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMesageError.innerHTML = 'Debe rellenar todos los valores'
  } 
  else if(valueRace === '' || valueDesc === ''){
    labelMesageError.innerHTML = 'Falta un campo por rellenar'  
  }
  else {
    labelMesageError.innerHTML = 'se ha añadido con exito'
  }
});

// cancelar formulario 
const formulary = document.querySelector('.form');
const cancelBtn = document.querySelector('.button-cancel');

cancelBtn.addEventListener('click', (event) => {
  event.preventDefault();
  inputName.value = '';
  inputDesc.value = '';
  inputPhoto.value = '';
  inputRace.value = '';

  // if (form.classList.contains('collapsed')=== false)
  if (!form.classList.contains("collapsed")){
    form.classList.add("collapsed");
  }
});



// bonus raza gatito
let html = '';
if (race1 === "") {
  html = `No se ha especificado la raza`;
  race1 = html;
} else {
  html = race1;
};



let list = document.querySelector(".js-list");
let kitten1= `<li class="card">
<article>
  <img
    class="card_img"
    src="${urlArticle1}"
    alt="gatito"
  />
  <h3 class="card_title">${name1}</h3>
  <h4 class="card_race">${race1}</h4>
  <p class="card_description">
    ${description1}
  </p>
</article>
</li>`;

let kitten2= ` <li class="card">
<article>
  <img
    class="card_img"
    src="${urlArticle2}"
    alt="gatito"
  />
  <h3 class="card_title">${name2}</h3>
  <h4 class="card_race">${race2}</h4>
  <p class="card_description">${description2}</p>
  </li>
</article>`;

let kitten3 = `<li class="card">
<article>
  <img
    class="card_img"
    src="${urlArticle3}"
    alt="gatito"
  />
  <h3 class="card_title">${name3}</h3>
  <h4 class="card_race">${race3}</h4>
  <p class="card_description">${description3}</p>
  </li>
</article>`;

// list.innerHTML= kitten1 + kitten2 + kitten3;

//Búsqueda por descripción

const input_search_desc = document.querySelector('.js_in_search_desc');
input_search_desc.value = 'cariñoso';
const descrSearchText = input_search_desc.value;
if (description1.includes(descrSearchText)){
  list.innerHTML += kitten1;
}
if (description2.includes(descrSearchText)){
  list.innerHTML += kitten2;

}
if (description3.includes(descrSearchText)){
  list.innerHTML += kitten3;
}

