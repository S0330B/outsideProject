const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScreenSchema = new Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    route: {
      type: "String",
      required: false,
      default: "",
    },
    code: {
      type: "String",
      required: false,
      default: "",
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Screen", ScreenSchema);
