const mongoose = require("mongoose");
const { Schema } = mongoose;

const restoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  foods: {
    type: [String],
    required: true,
  },
});

const RestoModel = new mongoose.model("Restaurant", restoSchema);
module.exports = { RestoModel };
