import Company from "./models/company.js";
import Materials from "./models/material.js";
import { companies } from "./data/companies.js";
import { materials } from "./data/materials.js";

async function insertMaterials() {
  console.group(">> Inserting materials");
  await Materials.deleteMany({});
  for (const m of materials) {
    const company = await Company.findOne(
      { name: m.company.name },
      { _id: 1 },
      {}
    );
    const material = new Materials({
      name: m.name,
      description: m.description,
      company: company._id,
    });
    await material.save();
    console.log(`Material ${m.name} inserted`);
  }
  console.log(">> All materials inserted");
  console.groupEnd();
}

async function insertCompanies() {
  console.group(">> Inserting companies");
  await Company.deleteMany({});
  for (const c of companies) {
    const company = new Company({
      name: c.name,
    });
    await company.save();
    console.log(`${c.name} inserted`);
  }
  console.log(">> All companies inserted");
  console.groupEnd();
}

await insertMaterials();
await insertCompanies();
process.exit(0);
