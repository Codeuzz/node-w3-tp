import mongoose from "./index.js";
import * as mongo from "mongoose";

const materialSchema = new mongoose.Schema({
  name: String,
  description: String,
  company: {
    type: mongo.Types.ObjectId,
    ref: "Company",
  },
});

const Materials = mongoose.model("Material", materialSchema);

export default Materials;
