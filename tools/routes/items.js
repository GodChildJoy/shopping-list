export default function (app) {
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

  app.route('/api/items')
     .get((req, res) => res.send(items))
     .post((req, res) => {
        const item = req.body;
        items.push(item);
    });
}
