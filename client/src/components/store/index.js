import { create } from 'zustand';

const useStore = create((set) => ({
  basket: [],
  cities: [],
  cards: [],
  user: { status: 'fetching', data: null },
  setUser: (data) => set(() => ({ user: data })),
  setCities: (data) => set(() => ({ cities: data })),
  setBasket: (data) => set(() => ({ basket: data })),
  setCards: (data) => set(() => ({ cards: data })),
}));

export default useStore;
