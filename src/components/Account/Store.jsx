import { create } from "zustand"

export const useLoginStore = create((set) => ({
    access_token : "",
    token_set: (token) => set((state) => ({access_token : {token}})),
}));