import mongoose from 'mongoose';

export default mongoose.connect('mongodb://localhost/groceries', () => {
  console.log("connected.");
});
