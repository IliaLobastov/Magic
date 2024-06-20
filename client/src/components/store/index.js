import { create } from 'zustand';

const useStore = create((set) => ({
  cities: [],
  user: { status: 'fetching', data: null },
  setUser: (data) => set(() => ({ user: data })),
  setCities: (data) => set(() => ({ cities: data })),
}));

export default useStore;
