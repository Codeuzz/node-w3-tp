import Company from "../models/company.js";
import Materials from "../models/material.js";

export async function getDetailedMaterials() {
  const materials = await Materials.find({}).populate("company", "name").exec();
  return materials;
}

export async function getDetailedMaterialById(id) {
  const material = await Materials.findById(id)
    .populate("company", "name")
    .exec();
  return material;
}
