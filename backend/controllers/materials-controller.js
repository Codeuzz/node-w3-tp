import { materials } from "../data/materials.js";
import { getDetailedMaterials } from "../services/materials-service.js";

export async function getMaterials(req, res) {
  const materials = await getDetailedMaterials();
  res.json(materials);
}
