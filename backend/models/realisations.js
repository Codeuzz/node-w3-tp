import mongoose from "./mongoose.js";
import { realisationMaterialsSchema } from "./realisation-materials.js";

const realisationSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  category: String,
  slug: {
    type: String,
    unique: true,
  },
  quantity: Number,
  materiaux: [realisationMaterialsSchema],
});

const Realisations = mongoose.model("Realisations", realisationSchema);

export default Realisations;
