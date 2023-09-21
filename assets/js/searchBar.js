import { SearchBar } from "./classes/SearchBar.js";

// Barra de pesquisa
const searchBarElement = document.querySelector("input.ri-search-line");
// Botão de pesquisa
const searchButtonElement = document.querySelector("button#header_search_button");

// Resultado da pesquisa
const searchResultElement = document.querySelector("div.c-searching-container__result");

// Tags
let tagList = document.querySelectorAll("span.tag");


// Array de filtro
let filterArrayTags = [];
let filterArrayTitle = [];
let filterArrayDescription = [];
let filterFinalArray = [];

// Cards fictícios
let arrayCard = [
  {
    "image": "/assets/imgs/stablishments/happiness_coffee_shop.png",
    "title": "Happiness Coffee Shop",
    "description": "A comfortable place for you and your whole family. Our facilities have ramps, a room for guide dogs, menus in Pounds version...",
   "tags": ["#stab_coffee-shop", "#desa_visual", "#desa_physical-motor"]
  },
  {
    "image": "/assets/imgs/stablishments/zursky_tech.png",
    "title": "Zurski Tech",
    "description": "A comfortable place for you and your whole family. Our facilities have ramps, a room for guide dogs, menus in Pounds version...",
   "tags": ["#stab_company", "#desa_visual", "#desa_hearing", "#desa_physical-motor"]
  },
  {
    "image": "/assets/imgs/stablishments/green_vegan_restaurant.png",
    "title": "Green Vegan Restaurant",
    "description": "A comfortable place for you and your whole family. Our facilities have ramps, a room for guide dogs, menus in Pounds version...",
   "tags": ["#stab_restaurant", "#desa_visual", "#desa_hearing", "#desa_physical-motor"]
  },
  {
    "image": "/assets/imgs/stablishments/gold_hotel.png",
    "title": "Gold Hotel",
    "description": "A comfortable place for you and your whole family. Our facilities have ramps, a room for guide dogs, menus in Pounds version...",
   "tags": ["#stab_hotel", "#desa_hearing", "#desa_physical-motor"]
  }
];


let searchbar = new SearchBar(searchBarElement, 
  searchButtonElement, 
  searchResultElement,
  tagList,
  arrayCard)

searchBarElement.onblur = ()=> {
  searchbar.searchReturn();
}