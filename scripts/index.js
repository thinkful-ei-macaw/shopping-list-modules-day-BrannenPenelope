
import store from './store.js';
import item  from './item.js';
import shoppingList from './shopping-list.js';

const main = function () {
  const itemNames = [ '', 'apples', 'pears' ];
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);