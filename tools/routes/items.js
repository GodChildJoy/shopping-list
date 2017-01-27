import GroceryItem from './../models/GroceryItem';

export default function (app) {

  app.route('/api/items')
  .get((req, res) => {
    GroceryItem.find((error, doc) => {
      res.send(doc);
    });
  })
  .post((req, res) => {
    const item = req.body;
    console.log("Adding item..", item);
    const groceryItem = new GroceryItem(item);
    groceryItem.save((err,data) => {
      res.status(300).send(data);
    });
  });

}
