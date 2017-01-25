// real api calls goes here
import $ from 'jquery';

const endpoint = "api/items";

export default class GloceryItemApi{
  static getAllGloceryItems() {
    return new Promise((success, error) => {
      $.ajax({
        url: endpoint,
        dataType: "json",
        success: success,
        error: error
      });
    });
  }

  static saveGloceryItem(item) {
    //item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((success, error) => {
        // Simulate server-side validation
        // const minItemTitleLength = 1;
        // if (item.title.length < minItemTitleLength) {
        //   reject(`Title must be at least ${minItemTitleLength} characters.`);
        // }
        $.ajax({
          url: endpoint,
          type: "POST",
          data: item,
          success: success,
          error: error
        });
    });
  }

  // static deleteGloceryItem(itemDelete) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfItemToDelete = items.findIndex(item => {
  //         // arrow function if has {} need return in side
  //         return item.title == itemDelete.title;
  //       });
  //       items.splice(indexOfItemToDelete, 1);
  //       resolve(itemDelete);
  //     }, delay);
  //   });
  // }
  //
  // static toggleItemPurchase(itemPurchase) {
  //   itemPurchase = Object.assign({}, itemPurchase);
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfItemToUpdate = [...items].findIndex(item =>
  //         // arrow function without {}, don't need return
  //         item.title === itemPurchase.title
  //       );
  //       [...items][indexOfItemToUpdate].purchased = !items[indexOfItemToUpdate].purchased;
  //       resolve(items[indexOfItemToUpdate]);
  //       console.log(items[indexOfItemToUpdate]);
  //     }, delay);
  //   });
  // }
}
