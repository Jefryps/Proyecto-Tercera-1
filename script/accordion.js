console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "¿Qué son los Deportes Electrónicos?",
  "desc": "Son deportes electrónicos, que se pueden practicar desde una PC o Consola de Videojuegos."
},
{
  "title": "¿Qué se necesita para formar parte de un equipo de E-Sports?",
  "desc": "Se necesita una PC o una Consola, además de mucha dedicación y esfuerzo."
},
{
  "title": "¿Son los E-Sports reconocidos como un deporte real?",
  "desc": "El debate sobre si son deporte siempre genera polémica, pero los expertos lo tienen claro, lo son. Gobiernos como el estadounidense o el alemán reconocen a los jugadores profesionales de videojuegos como atletas y el Comité Olímpico Coreano ha concedido el rango de deporte olímpico a los esports."
},
{
  "title": "¿Desde cuándo existen los E-Sports?",
  "desc": "Los esports existen desde hace tiempo, pero es en la actualidad cuando están viviendo su mejor momento en términos de notoriedad, inversión y seguidores, gracias también a la expansión de internet y las nuevas tecnologías y plataformas. Lo que en un principio eran torneos minoritarios o locales, en los últimos tiempos se ha convertido en un fenómeno en el que no solo los jugadores profesionales están implicados, sino también los millones de fans de los videojuegos y la competición que lo siguen desde sus casas o llenan estadios de todo el mundo, desde Seúl hasta Berlín, pasando por Nueva York o Madrid."
}];


(function () {
    let ACCORDION = {
      init: function () {
        let _self = this;
        //llamanos las funciones
        this.insertData(_self);
        this.eventHandler(_self);
      },
  
      eventHandler: function (_self) {
        let arrayRefs = document.querySelectorAll('.accordion-title');
  
        for (let x = 0; x < arrayRefs.length; x++) {
          arrayRefs[x].addEventListener('click', function(event){
            console.log('event', event);
            _self.showTab(event.target);
          });
        }
      },

      showTab: function(refItem){
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab){
          activeTab.classList.remove('tab-active');
        }
  
        console.log('show tab', refItem);
        refItem.parentElement.classList.toggle('tab-active');
      },
  
      insertData: function (_self) {
        dataAccordion.map(function (item, index) {
          document.querySelector('.main-accordion-container').insertAdjacentHTML('beforeend', _self.tplAccordionItem(item));
        });
      },

      tplAccordionItem: function (item) {
        return(`<div class='accordion-item'>
        <p class='accordion-title'>${item.title}</p>
        <p class='accordion-desc'>${item.desc}</p>
      </div>`)},
    }
  
    ACCORDION.init();
  })();