import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getMaterials,
  login,
  logout,
  getRealisations,
  addRealisation,
  updateRealisationQty,
} from "./api";

export function useMaterials() {
  return useQuery(["materials"], async () => {
    const res = await getMaterials();
    return res.data;
  });
}

export function useRealisations() {
  return useQuery(["realisations"], async () => {
    const res = await getRealisations();
    return res.data;
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
  });
}

export function useLogout() {
  return useMutation({
    mutationFn: () => logout(),
  });
}

export function useAddRealisation() {
  const queryClient = useQueryClient();
  return useMutation(addRealisation, {
    onSuccess: () => {
      queryClient.invalidateQueries(["realisations"]);
    },
  });
}

export function useUpdateRealisationQty() {
  const queryClient = useQueryClient();
  return useMutation(updateRealisationQty, {
    onSuccess: () => {
      queryClient.invalidateQueries(["realisations"]);
    },
  });
}
