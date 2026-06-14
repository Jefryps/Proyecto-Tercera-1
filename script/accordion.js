console.log('Cargando Accordion...');
const dataAccordion = [{
  "title": "¿Machine Biker club, quienes somos?",
  "desc": "Somos una comunidad de motociclistas apasionados por el estilo de vida y la cultura de la motocicleta Japonesas."
},
{
  "title": "Objetivo de la comunidad",
  "desc": " Nuestro objetivo es crear un espacio donde los amantes de las motocicletas japonesas puedan compartir sus experiencias, conocimientos y pasión por estas máquinas únicas."
},
{
  "title": "¿Como formar parte de la comunidad?",
  "desc": "Puedes unirte a nuestras redes sociales y participar en los eventos y actividades que organizamos."
},
{
  "title": "Historia",
  "desc": "La historia de Machine Biker Club se remonta a varios años atrás, cuando un grupo de entusiastas de las motocicletas japonesas se unió para compartir su pasión y conocimiento."
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
        let currentitem = refItem.parentElement; 
        let activeTab = document.querySelector('.tab-active');
  
        if(activeTab && activeTab !== currentitem){
          activeTab.classList.remove('tab-active');
        }
        currentitem.classList.toggle('tab-active');


        
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