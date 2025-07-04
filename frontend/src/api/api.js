import axiosClient from "./axios-client.js";

export const login = async ({ email, password }) => {
  const res = await axiosClient.post(
    "/login",
    {
      email,
      password,
    },
    { withCredentials: true }
  );
  return res.data;
};

export const logout = () => axiosClient.post("/logout");

export const getMaterials = () => axiosClient.get("/materials");

export const getRealisations = () => axiosClient.get("/realisation");

export const addRealisation = (realisationData) =>
  axiosClient.post("/realisation", realisationData);

export const updateRealisationQty = ({ id, qty }) =>
  axiosClient.put("/updateRealisation", { id, qty });
