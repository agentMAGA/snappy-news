import { create } from 'zustand';

const useAppStore = create((set) => ({

  searchValue: "",
  isOpen: false ,
  searchOpen: false,

  setSearchValue: (value) => set({ searchValue: value }),
  onSearchValue: (event) => set({ searchValue: event.target.value }),

  openMenu: () => set({isOpen: true}),
  closeMenu: () => set({isOpen: false}),

  openSearch: () => set({searchOpen:true}),
  closeSearch: () => set({searchOpen:false}),
}));

export default useAppStore;