import mongoose from "./mongoose.js";
import * as mongo from "mongoose";

export const realisationMaterialsSchema = new mongoose.Schema({
  material: {
    type: mongo.Schema.Types.ObjectId,
    ref: "Material",
  },
  qty: Number,
});
