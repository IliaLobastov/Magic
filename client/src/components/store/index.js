import { create } from "zustand";

const useStore = create((set) => ({
  user: { status: "fetching", data: null },
  setUser: (data) => set(() => ({ user: data })),
}));

export default useStore;
