const slideButtons = document.querySelectorAll(.c-slider__button);
const bd = [
  {
    Image:"",
    title:"establishments",
    text:"nkjnjhnihoijliljljkbjb",
    rate:3,
  },
];

let count = 0;

let slideCard = document.createElement("article");

function changeCard(){
  if(0<count> bd.length)return;
  slideCard.setAttribute(
    "class",
    "c-card u-margin u-border-radius u-tertiary-bg-color"
  );
  slideCard.innerHTML = 
  <aside class= "c-card_aside">
    <Img
    class= "c-card_img"
    src="${bd[count].image}"
    width="200"
    alt=""
    />
  </aside>
}

const cardModel=
<article
class="c-card u-margin u-border-radius u-tertiary-bg-color"
>
  <aside class="c-card_aside">
    <Img
    class="c-card_img"
    src="${bd[count].image}"
width="200"
alt=""
/>
</aside>
<div
class=
  if (count <0) return;
  ++count;
  changeCard();
}

function nextSlide(){
  if(count<BroadcastChannel.length)return;


  ++count;
  changeCard();
}

slideButtons[0].addEventListener("click",previousSlide);


slideButtons[1].addEventListener("click",nextSlide);

setInterval(() => {
  if (count >= bd.length){
    count = 0;
    return;
  }
  nextSlide();
},5000);


<div
class="c-card_main-content u-column-container u-center u-text-center u-padding"
>
  <h2>${bd[count].title}</h2>
  <p>
    ${bd[count].text}
  </p>
  <footer><span 
  class="u-row-container u-margin u-gap"
  >
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
  </footer>
  <span 
  class="u-row-container u-margin u-gap"
  >
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
    <i class="ri-star-fill"></i>
  
  </span>
</div>
slidecontainer.appendChild(slideCard);
}

function previousSlide(){
  if(count <0) return;
  --count;
  changeCard(count);
}

function nextSlide(){
  if (count >= bd.length</article>) {


    
  }
}