'use strict';

function tabs(tabsContainer, tabContent, tabsSelector, activeClass) {

  const tab = document.querySelector(tabsContainer),
        tabs = tab.querySelectorAll(tabContent),
        tabsMenu = document.querySelectorAll(tabsSelector),
        tabsM = document.querySelectorAll('.tabheader__item');

  function hideTabs() {
    tabs.forEach(item => {
      item.style.display = 'none';
    });
    tabsMenu.forEach(item => {
      item.classList.remove(activeClass);
    });
  }

  function showTabs(i = 0) {
    tabs[i].style.display = '';
    tabsMenu[i].classList.add(activeClass);
  }
  hideTabs();
  showTabs();

  tab.addEventListener('click', (e) => {
    if (e.target && e.target.classList.contains(tabsSelector.slice(1))) {
      tabsMenu.forEach((item, i) => {
        if (item === e.target) {
          hideTabs();
          showTabs(i);
        }
      });
    }
  });

  // tabsM.forEach((item, i) => {
  //   item.addEventListener('click', () => {
  //     hideTabs();
  //     showTabs(i);
  //   });
  // });

}


export default tabs;