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
    // groceryItem is the saved item in db, which has property _id
    const groceryItem = new GroceryItem(item);
    groceryItem.save((err) => {
      res.status(201).send(groceryItem);
    });
  });

  app.route('/api/items/:id')
  .delete((req, res) => {
      GroceryItem.remove({
          _id: req.params.id
      }, (err, doc) => {
          if (err)
              res.send(err);
          else
            res.send(req.params.id);
      });
  })
  .patch((req, res) => {
    GroceryItem.findById(req.params.id, function(err, doc) {
      if (err)
          res.send(err);
      console.log(req.body.purchased);
      doc.purchased = !req.body.purchased;
        console.log(req.body.purchased);
      // save the bear
      doc.save(function(err) {
          if (err)
              res.send(err);
          res.send(doc);
      });
    });
  });
}
