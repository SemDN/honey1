
document.addEventListener("DOMContentLoaded", () => {
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'css/style.css';
  document.head.appendChild(link);

  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'js/plagins/smooth/smoth.js';
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);

  const changeItem = document.querySelector('.accordion__link-changeItems').addEventListener("click", () => {
    var str = location.href;
    var lastIndex = str.lastIndexOf("index");
    str = str.substring(0, lastIndex);

    if (link.href == str + 'css/style.css') {
      link.href = link.href = 'css/style2.css';
      script.src = 'src';
    } else {
      link.href = 'css/style.css';
      script.src = 'js/plagins/smooth/smoth.js';
    }
  })

  console.log(productCard)

  const addRenderCard = (prod) => `
    <div class="product__container">
        <a href="#modal-2" class="product__info js-modal-open">Выбрать</a>
        <h2 class="product__name">${prod.title}</h2>
        <h2 class="product__deck">${prod.deck}</h2>

        <div class="product__Price0nlyModal">${prod.price}</div>
        <img class="product__img" src="${prod.img}" alt="">
    </div>
`
  const cardRender = (arrayCard, selector) => {
    let htmlRED = arrayCard.map(prod => addRenderCard(prod)).join('')
    document.querySelector(selector).innerHTML = htmlRED
  }

  const addModalCart = (cart) => `
  <button class="modal__right-sections-button">
    <img class="modal__right-sections-img" src="${cart.img}">
    <h2 class="modal__right-sections-title">${cart.title}</h2>
    <span class="modal__right-sections-money">${cart.price}</span></span>
  </button>
`

  const cardModalRender = (arrayCard, selector) => {
    let htmlRED = arrayCard.map(prod => addModalCart(prod)).join('')
    document.querySelector(selector).innerHTML = htmlRED
  }


  cardRender(productCard, '.productsCard')
  cardModalRender(cartModal, '.modal__right-sections')




})
