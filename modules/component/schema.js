const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComponentSchema = new Schema(
  {
    title: {
      type: "String",
      required: true,
    },
    description: {
      type: "String",
      required: false,
      default: "",
    },
    code: {
      type: "String",
      required: false,
      default: "",
    },
    cover: {
      type: "String",
      required: false,
      default: "",
    },
    screen: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Components", ComponentSchema);
