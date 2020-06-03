/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];


  const header = document.querySelector('.header');

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The 'menuMaker' takes an array as its only argument.*/

  function menuMaker(items) {
    const menu = document.createElement('div');
    const list = document.createElement('ul');
    const button = document.querySelector('.menu-button');
    button.style.padding = '1px';


    menu.classList.add('menu');

    menu.appendChild(list);

    function itemMaker(items) {
      const item = document.createElement('li');
      item.textContent = items;
      return item;
    }

    menuItems.forEach(menuArray => {
      const item = itemMaker(menuArray);
      list.appendChild(item);
    });

    button.addEventListener('click', event => {
      menu.classList.toggle('menu--open');
    });
    button.addEventListener('mouseover', event => {
      button.style.border = '1px solid white';
      button.style.padding = '0';
    });
    button.addEventListener('mouseout', event => {
      menu.classList.remove('menu--open');
      button.style.border = 'none';
      button.style.padding = '1px';
    });

    return menu;
  }

  const menu = menuMaker(menuItems);
  header.appendChild(menu);

 /* Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return your div with a 'menu' class.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned markup to the DOM.
*/
