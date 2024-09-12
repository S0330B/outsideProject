const express = require("express");

const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

const path = require("path");

const featureSchema = require("./modules/feature/schema");
const productSchema = require("./modules/product/schema");
const componentSchema = require("./modules/component/schema");
const ArrayHelper = require("./utils/helpers/array");

app.get("/", async function (req, res) {
  const [components, features, products] = await Promise.all([
    componentSchema.find({ screen: "home" }).lean(),
    featureSchema.find({}).lean(),
    productSchema.find({}).lean(),
  ]);

  // console.log(ArrayHelper.convertDataToSectionMap(components));
  res.render("pages/index", {
    FEATURES: features,
    PRODUCTS: products,
    COMPONENTS: ArrayHelper.convertDataToSectionMap(components),
  });
});
const productRouter = require("./modules/product/router");
app.use("/products", productRouter);

const featureRouter = require("./modules/feature/router");
app.use("/features", featureRouter);

const componentRouter = require("./modules/component/router");
app.use("/components", componentRouter);

const screenRouter = require("./modules/screen/router");
app.use("/screen", screenRouter);

app.listen(8080, async (req, res) => {
  console.log("App is running on port 8080");
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@cluster0.crjodf1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Database is connected");
  } catch (e) {
    console.log(e);
  }
});
