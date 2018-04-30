import M from 'materialize-css/dist/js/materialize.js';

class NavigationTriggers {

  static sideNavEvents() {
    let sideNav = document.querySelector('.sidenav');
    let instance = M.Sidenav.init(sideNav, { edge: 'left' });

    document.querySelector('.sidenav-arrow').addEventListener('click', () => {
      instance.close();
    });
  }

  static dropDownMenuOpenEvent() {
    let dropDown = document.querySelector('.dropdown-trigger');
    let instance = M.Dropdown.init(dropDown, {});
  }

}

export default NavigationTriggers;
