import M from 'materialize-css/dist/js/materialize.js';

class LightBoxTrigger {

  lightBoxClickEvent(clickElement, modalClass, inputId) {
      document.querySelector(clickElement).addEventListener('click', () => {
        let modal = document.querySelector(modalClass);
        let input = document.getElementById(inputId);
        let instance = M.Modal.init(modal, {});

        console.log(instance);
        instance.open();
        
        setTimeout(() => {
          input.focus();
        }, 150)
      });
  }


  lightBoxEvents() {
    this.lightBoxClickEvent('.fitintasks-edit', '.fitintasks-modal', 'fitin-task-edit');
  }

  initalizeLightBox() {
    this.lightBoxEvents();
  }
}

export default LightBoxTrigger;
