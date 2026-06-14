console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Yamaha confianza y diversion",
  "url_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSews-0WkkJzZgZWdFMkpWDKwuP-k8FrbQ1Hw&s",
  "desc": "Respaldo y confianza en Costa rica desde 1955, Yamaha es una marca reconocida mundialmente por su calidad y durabilidad.",
  "cta": "Mostrar más",
  "link": "https://www.yamahacostarica.com/?gad_source=1&gad_campaignid=23864675991&gbraid=0AAAAADqZYcCnQEzMuJN2VypYKK5Are7Mn&gclid=Cj0KCQjwornRBhCrARIsAON5exG_bYNWKi6bppcKFBdw5y-x9d4QsqXUeXsBa1w-dH83CQ6_x_fo2GcaAntUEALw_wcB"
},
{
  "title": "Honda, calidad y durabilidad",
  "url_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-l9kgPzrV1Vs_SjXE73Yu3rbmlBxLzhRk1w&s",
  "desc": "Honda es una marca reconocida mundialmente por su calidad y durabilidad, con una amplia gama de motocicletas para todos los gustos.",
  "cta": "Mostrar más",
  "link": "https://mundohonda.cr/"
},
{
  "title": "kawasaki, potencia y velocidad",
  "url_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLyco44AtEbguF5RV48wuyYl_9kS5IQpEN9A&s",
  "desc": "Kawasaki es una marca reconocida mundialmente por su potencia y velocidad, es una marca con estilo y diseño unico.",
  "cta": "Mostrar más",
  "link": "https://costarica.kawasaki-la.com/en-la/"
},
{
  "title": "Conoce y comparte con tu comunidad de motocilcistas en costa rica y el mundo apascionados por las japonesas",
  "url_image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrgb1KyKC0diwwLkJiejKW58NUDira69BlA&s",
  "desc": "Comparte tus experiencias, fotos, videos y opiniones con otros amantes de las motocicletas japonesas en nuestra comunidad en línea.",
  "cta": "Mostrar más",
  "link": "https://www.reddit.com/r/motorcycles/comments/1ggjkbq/japanese_motorcycle/?tl=es-419"
},
{
  "title": "Tienes prisa por vender tu moto? No te preocupes, nosotros te ayudamos a encontrar un comprador rápidamente",
  "url_image": "https://crautos.com/assets/images/brand/logo.png?v=27	",
  "desc": "Publica tu moto en nuestro sitio web y llega a miles de compradores potenciales en todo el país, con una plataforma fácil de usar y sin complicaciones.",
  "cta": "Mostrar más",
  "link": "https://crautos.com/"
},
{
  "title": "Necesitas llantas y accesorios para tu moto? Tenemos una amplia selección de productos de alta calidad a precios competitivos",
  "url_image": "https://motosportire.cr/wp-content/uploads/2022/03/LOGO-MOTOSPORTIRE-CON-MONTANAS.png",
  "desc": "Gran variedad de llantas y accesorios para tu moto, con envío rápido y seguro a todo el país, además de un excelente servicio al cliente.",
  "cta": "Mostrar más",
  "link": "https://motosportire.cr/"
}
];

(function () {
  let CARD = {
    init: function () {
      //console.log('card module was loaded');
      let _self = this;

      //llamanos las funciones
      this.insertData(_self);
      //this.eventHandler(_self);
    },

    eventHandler: function (_self) {
      let arrayRefs = document.querySelectorAll('.accordion-title');

      for (let x = 0; x < arrayRefs.length; x++) {
        arrayRefs[x].addEventListener('click', function (event) {
          console.log('event', event);
          _self.showTab(event.target);
        });
      }
    },

    insertData: function (_self) {
      dataCards.map(function (item, index) {
        document.querySelector('.card-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));
      });
    },

    tplCardItem: function (item, index) {
      return (`<div class='card-item' id="card-number-${index}">
            <img src="${item.url_image}"/>
            <div class="card-info">
              <p class='card-title'>${item.title}</p>
              <p class='card-desc'>${item.desc}</p>
              <div class="boton-cta">
              <a class='card-cta' target="blank" href="${item.link}">${item.cta}</a>
              </div>
            </div>
          </div>`)
    },
  }

  CARD.init();
})();