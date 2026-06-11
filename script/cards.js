console.log('Cards cargado correctamente');

const dataCards = [{
  "title": "Juega solo o con amigos",
  "url_image": "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/11/15/18/league-of-legends.jpg?w968h681",
  "desc": "No es necesario ser parte de un equipo, aunque no está de más un poco de ayuda.",
  "cta": "Mostrar más",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Diferentes modos de juego",
  "url_image": "https://dotesports-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/sites/4/2019/06/20165237/tft1.png",
  "desc": "Modo Clásico, Dominion, Snowdown y otros modos de juego, todo depende de tu tipo de estretegia y tus mejores habilidades.",
  "cta": "Mostrar más",
  "link": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipq6zInbblAhUInFkKHSYwCMkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fwhen-a-passion-for-videogames-helps-land-that-job-11551888001&psig=AOvVaw2cvigcMN-U27d5xC22PpZw&ust=1572050615969380"
},
{
  "title": "Participa en las eliminatorias regionales",
  "url_image": "https://d392eissrffsyf.cloudfront.net/LAN/Worlds%202015/CuartosDeFinal.jpg",
  "desc": "Escala desde abajo, no es necesario enfrentarse a los mejores desde el promcipio, pero si debes ser el mejor para poder clasificar.",
  "cta": "Mostrar más",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Personaliza tus campeones favoritos con skins",
  "url_image": "https://miro.medium.com/v2/resize:fit:1400/1*myfZd0fORBarQOlZKXCHoQ.png",
  "desc": "Ser un campeón tiene sus beneficios, escoge y presume tus skins personalizados!",
  "cta": "Mostrar más",
  "link": "https://www.edsurge.com/news/2019-01-22-educators-share-how-video-games-can-help-kids-build-sel-skills"
},
{
  "title": "Posicionate en los Ranking de la temporada",
  "url_image": "https://bolavip.com/export/sites/bolavip/img/2019/01/23/image_2.png_1056961943.png",
  "desc": "Más y más reconocimientos, si tú o tu equipo se convierte en los mejores, todos lo sabrán!",
  "cta": "Mostrar más",
  "link": "https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwipq6zInbblAhUInFkKHSYwCMkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wsj.com%2Farticles%2Fwhen-a-passion-for-videogames-helps-land-that-job-11551888001&psig=AOvVaw2cvigcMN-U27d5xC22PpZw&ust=1572050615969380"
},
{
  "title": "Prueba la beta de TFT",
  "url_image": "https://newsbytes.ph/wp-content/uploads/2026/03/gameplay.jpg",
  "desc": "¡Pase beta de TFT V.3 próximamente!",
  "cta": "Mostrar más",
  "link": "https://las.leagueoflegends.com/es/news/game-updates/features/pase-beta-de-tft-v3-proximamente"
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