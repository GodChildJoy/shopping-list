import mongoose from 'mongoose';
import GroceryItem from './models/GroceryItem';

export default mongoose.connect('mongodb://localhost/groceries', () => {
  console.log("connected.");

  // every time run server for each will write those items in db,
  // so remove them when restart server
  mongoose.Promise = global.Promise;
  mongoose.connection.db.dropDatabase();

  // write those into db
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

  items.forEach(item => {
    new GroceryItem(item).save();
  });
});
