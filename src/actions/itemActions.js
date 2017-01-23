import * as types from './actionTypes';
import gloceryItemApi from '../api/mockGloceryItemApi';

//when no api call not involve backend, using this action
// we change store straight don't care if request success
// export function createGloceryItem(item){
//   return {
//     type: types.CREATE_GLOCERY_ITEM,
//     item // item: item(es6)
//   };
// }

export function createGloceryItemSuccess(item){
  return {
    type: types.CREATE_GLOCERY_ITEM_SUCCESS,
    item // item: item(es6)
  };
}

export function loadGloceryItemsSuccess(items) {
  return {
    type: types.LOAD_GLOCERY_ITEMS_SUCCESS,
    items
  };
}

export function deleteGloceryItemSuccess(deleteItem){
  return {
    type: types.DELETE_GLOCERY_ITEM_SUCCESS,
    deleteItem// item: item(es6)
  };
}

export function toggleItemPurchaseSuccess (item) {
  return {
    type: types.TOGGLE_ITEM_PURCHASE_SUCCESS,
    item
  };
}

//thunk, allow action return a callback function which can be called later
// instead of return an object, best place for control api call promises
export function loadGloceryItems(){
  return function (dispatch) {
    return gloceryItemApi.getAllGloceryItems().then(items=>{
      dispatch(loadGloceryItemsSuccess(items));
    }).catch(err => {
      // can have a loadGloceryItemsError function here
      throw(err);
    });
  };
}

//thunk handle save action for create and update
export function saveGloceryItem(item) {
  return function(dispatch) {
    return gloceryItemApi.saveGloceryItem(item).then(item=>{
      dispatch(createGloceryItemSuccess(item));
    }).catch(err => {
      throw(err);
    });
  };
}

export function deleteGloceryItem(deleteItem) {
  return function(dispatch) {
    return gloceryItemApi.deleteGloceryItem(deleteItem).then(item => {
      dispatch(deleteGloceryItemSuccess(deleteItem));
    }).catch(err => {
      throw(err);
    });
  };
}

export function togglePurchase (item) {
  return function(dispatch) {
    return gloceryItemApi.toggleItemPurchase(item).then(item => {
      dispatch(toggleItemPurchaseSuccess(item));
    }).catch(err => {
      throw(err);
    });
  };
}
