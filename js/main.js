"use strict";

//kitten1
const kittenData_1 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: '',
};
//kitten2
const kittenData_2 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};
//kitten3
const kittenData_3 = {
  image: 'https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg',
  name: 'Anastacio',
  desc: 'Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!',
  race: 'British Shorthair',
};


const kittenDataList = [kittenData_1, kittenData_2,kittenData_3];

console.log(kittenDataList);

// funciones ver y ocultar formulario
const newFormElement = document.querySelector(".js-new-form"); 
const linkNewFormElememt = document.querySelector('.icon');

linkNewFormElememt.addEventListener('click', handleClickNewCatForm);

function showNewCatForm() {
  newFormElement.classList.remove('collapsed');
}
function hideNewCatForm() {
  newFormElement.classList.add('collapsed');
}
function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

// Boton añadir y validar formulario gatito
const button = document.querySelector('.js-btn-add');
const inputRace = document.querySelector('.js-input-race');
const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMesageError = document.querySelector('.js-label-error');

button.addEventListener('click', addNewKitten);

function addNewKitten(event) {
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
}

// cancelar formulario 
const form = document.querySelector('.form');
const cancelBtn = document.querySelector('.button-cancel');

const cancelNewKitten = (event) => {
  event.preventDefault();
  inputName.value = '';
  inputDesc.value = '';
  inputPhoto.value = '';
  inputRace.value = '';

  // if (form.classList.contains('collapsed')=== false)
  if (!form.classList.contains("collapsed")){
    form.classList.add("collapsed");
  }
};

cancelBtn.addEventListener ('click', cancelNewKitten);

// crear gatitto en HTML
const list = document.querySelector(".js-list");
function renderKitten(kittenData) {
  const html = renderRace(kittenData);
  const kitten = `<li class="card">
  <article>
    <img
      class="card_img"
      src="${kittenData.image}"
      alt="gatito"
    />
    ${html}
    <h3 class="card_title">${kittenData.name}</h3>
    <h4 class="card_race">${kittenData.race}</h4>
    <p class="card_description">
      ${kittenData.desc}
    </p>
  </article>
  </li>`;
        
  return kitten;
};
let kitten1 = renderKitten(kittenData_1);
const kitten2 = renderKitten(kittenData_2);
const kitten3 = renderKitten(kittenData_3);

function renderRace(kittenData){
  let html = '';
  if (kittenData.race === ""){
    html = '<p class="card_race">No se ha especificado la raza</p>';
  }else{
    html = `<h3 class="card_race">${kittenData.race}</h3>`;
  }
  return html;
}


// mostrar la raza o no 



// filtrar por descripción
const buttonSearch = document.querySelector('.js-button-search');
const input_search_desc = document.querySelector('.js_in_search_desc');

const filterKitten = (event) => {
  event.preventDefault();
  const descrSearchText = input_search_desc.value;
  if (description1.includes(descrSearchText)){
    list.innerHTML += kitten1;
  }
  else if (description2.includes(descrSearchText)){
    list.innerHTML += kitten2;
  
  }
  else if (description3.includes(descrSearchText)){
    list.innerHTML += kitten3;
  }
  
};
buttonSearch.addEventListener('click', filterKitten);

list.innerHTML = kitten1 + kitten2+ kitten3;

