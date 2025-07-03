import {
  createRealisation,
  getDetailedRealisations,
  updateRealisationQuantity,
} from "../services/realisations-service.js";

export const realisationController = {
  getRealisations: async (req, res) => {
    try {
      console.log("[GET] Realisations");
      const realisation = await getDetailedRealisations();
      res.status(200).send({ realisation });
    } catch (err) {
      console.error(err);
    }
  },

  updateRealisationQty: async (req, res) => {
    const { id, qty } = req.body;
    if (!id || !qty) {
      return res
        .status(403)
        .send({ modified: false, reason: "No data to update" });
    }
    const updateResult = await updateRealisationQuantity(id, qty);

    if (updateResult.modified) {
      return res.send(updateResult);
    }

    res.status(403).send({ modified: false });
  },

  addRealisation: async (req, res) => {
    const { values } = req.body;

    if (!values) {
      return res
        .status(403)
        .send({ success: false, message: "No data to add" });
    }
    const creationResult = await createRealisation(values);
    if (creationResult.created) {
      return res.send({
        success: true,
        message: "New realisation added",
      });
    }
    res.send({ success: false, message: creationResult.reason });
  },
};
