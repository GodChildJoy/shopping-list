import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.

const items = [{
    title:"Ice Cream"
},{
    title:"Waffles",
    purchased:true
},{
    title:"Candy"
},{
    title:"Snarks",
    purchased:false
}];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.

class GloceryItemMockApi {
  static getAllGloceryItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveGloceryItem(item) {
    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemTitleLength = 1;
        if (item.title.length < minItemTitleLength) {
          reject(`Title must be at least ${minItemTitleLength} characters.`);
        }
        //Just simulating creation here.
        items.push(item);
        resolve(item);
      }, delay);
    });
  }

  static deleteGloceryItem(itemDelete) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          // arrow function if has {} need return in side
          return item.title == itemDelete.title;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve(itemDelete);
      }, delay);
    });
  }

  static toggleItemPurchase(itemPurchase) {
    itemPurchase = Object.assign({}, itemPurchase);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToUpdate = [...items].findIndex(item =>
          // arrow function without {}, don't need return
          item.title === itemPurchase.title
        );
        [...items][indexOfItemToUpdate].purchased = !items[indexOfItemToUpdate].purchased;
        resolve(items[indexOfItemToUpdate]);
        console.log(items[indexOfItemToUpdate]);
      }, delay);
    });
  }
}

export default GloceryItemMockApi;
