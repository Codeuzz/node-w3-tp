import axiosClient from "./axiosClient";

export const login = ({ email, password }) =>
  axiosClient.post("/login", { email, password });

export const logout = () => axiosClient.post("/logout");

export const getMaterials = () => axiosClient.get("/materials");

export const getRealisations = () => axiosClient.get("/realisation");

export const addRealisation = (realisationData) =>
  axiosClient.post("/realisation", realisationData);

export const updateRealisationQty = ({ id, qty }) =>
  axiosClient.put("/updateRealisation", { id, qty });
