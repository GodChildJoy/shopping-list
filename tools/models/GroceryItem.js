import mongoose from 'mongoose';

const GroceryItemSchema = {
  title: String,
  purchased: Boolean,
  id: String
};

// arguments: model name, model schema, pluralize of model name(camel case)
const GroceryItem = mongoose.model('GroceryItem', GroceryItemSchema, "groceryItems");

export default GroceryItem;
