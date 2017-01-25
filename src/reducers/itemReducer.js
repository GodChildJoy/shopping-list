import * as types from '../actions/actionTypes';

function itemReducer(state=[], action) {
  switch (action.type) {
    case types.CREATE_GLOCERY_ITEM_SUCCESS:
      // return arrary because state = [], state is array of ...
      return [...state, Object.assign({}, action.item)];
    case types.LOAD_GLOCERY_ITEMS_SUCCESS:
      return action.items;
    case types.DELETE_GLOCERY_ITEM_SUCCESS:
      return [
        ...state.filter(item => action.deleteItem.title !== item.title)
      ];
    case types.TOGGLE_ITEM_PURCHASE_SUCCESS:
      return [
        // remove the toggle item form store,
        // update with the new value one from action (which is from backend)
        ...state.filter(item => action.item.title !== item.title),
        Object.assign({}, action.item)
      ];
    default:
      return state;
  }
}

export default itemReducer;

// export function setGroceryItemBought(item, isBought){
//   var _item = items.filter(function(a){ return a.name == item.name})[0];
//   item.purchased = isBought || false;
//   helper.patch('api/items/' + item._id, item);
// }
