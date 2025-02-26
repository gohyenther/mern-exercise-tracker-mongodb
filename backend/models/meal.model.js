const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mealSchema = new Schema({
  username: { type: String, required: true },
  meal: { type: String, required: true },
  calories: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;