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
  return useQuery({
    queryKey: ["materials"],
    queryFn: async () => {
      const res = await getMaterials();
      return res.data;
    },
  });
}

export function useRealisations() {
  return useQuery({
    queryKey: ["realisations"],
    queryFn: async () => {
      const res = await getRealisations();
      return res.data;
    },
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
  return useMutation({
    mutationKey: ["addRealisation"],
    mutationFn: addRealisation,
    onSuccess: () => {
      queryClient.invalidateQueries(["realisations"]);
    },
  });
}

export function useUpdateRealisationQty() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateRealisationQty"],
    mutationFn: updateRealisationQty,
    onSuccess: () => {
      queryClient.invalidateQueries(["realisations"]);
    },
  });
}
