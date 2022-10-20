"use strict";

const urlArticle1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
let name1 = "Anastacio";
name1 = name1.toUpperCase();
const description1 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const race1 = "British Shorthair";

const urlArticle2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
let name2= "Fiona";
const description2 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const race2 = "British Shorthair";

const urlArticle3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
let name3= "Cielo";
const description3 = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const race3 = "British Shorthair";




let form = document.querySelector(".js-new-form"); 
form.classList.remove("collapsed");

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

list.innerHTML= kitten1 + kitten2 + kitten3;
