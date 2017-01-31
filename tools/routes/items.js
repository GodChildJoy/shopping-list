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
    groceryItem.save((err) => {
      res.status(201).send(item);
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
    GroceryItem.findOne({
      _id: req.body._id
    }, (error, doc) => {
      console.log(typeof(req.body.purchased));
      doc.purchased = !req.body.purchased;
      doc.save();
      res.status(200).send(doc);
    });
  });

}
