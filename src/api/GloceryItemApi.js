// real api calls goes here
import $ from 'jquery';

const endpoint = "/api/items";

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
        $.ajax({
          url: endpoint,
          type: "POST",
          data: item,
          success: success,
          error: error
        });
    });
  }

  static deleteGloceryItem(itemDelete) {
    return new Promise((success, error) => {
      $.ajax({
        url: endpoint+'/'+itemDelete._id,
        type: "DELETE",
        success: success,
        error: error
      });
    });
  }

  static toggleItemPurchase(itemPurchase) {
    //itemPurchase = Object.assign({}, itemPurchase);
    return new Promise((success, error) => {
      $.ajax({
        url: endpoint+'/'+itemPurchase._id,
        type: "PATCH",
        data: JSON.stringify(itemPurchase),
        success: success,
        error: error
      });
    });
  }
}
