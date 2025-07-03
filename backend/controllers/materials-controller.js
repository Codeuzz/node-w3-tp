import { materials } from "../data/materials.js";
export async function getMaterials(req, res) {
  try {
    console.log("[GET] materials");
    res.json(materials);
  } catch (err) {
    console.error(err);
  }
}
