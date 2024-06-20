import { create } from 'zustand';

const useStore = create((set) => ({
  basket: [],
  cities: [],
  user: { status: 'fetching', data: null },
  setUser: (data) => set(() => ({ user: data })),
  setCities: (data) => set(() => ({ cities: data })),
  setBasket: (data) => set((state) => ({ basket: [...state.basket, data] })),
}));

export default useStore;
