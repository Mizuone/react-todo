import M from 'materialize-css/dist/js/materialize.js';

class NavigationTriggers {

  static sideNavEvents() {
    let sideNav = document.querySelector('.sidenav');
    let instance = M.Sidenav.init(sideNav, { edge: 'left' });

    if (window.innerWidth <= 992) {

      document.querySelectorAll('.sidenav-arrow, .sidenav-fixed > li > a').forEach((clickElement) => {

        clickElement.addEventListener('click', (event) => {
          instance.close();
        });

      });

    }

  }

  static dropDownMenuOpenEvent() {
    let dropDown = document.querySelector('.dropdown-trigger');
    M.Dropdown.init(dropDown, {});
  }

}

export default NavigationTriggers;
