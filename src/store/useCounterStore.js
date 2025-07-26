import { create } from 'zustand';
import axios from 'axios';

export const useNewsStore = create((set) => ({
  news: [],
  isLoading: false,

  fetchNews: async ({ query }) => {
    try {
      set({ isLoading: true });
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          q: query,
          country: "us",
          sortBy: "popularity",
          apiKey: "0c13cdcbef204accae08c1725be97c20",
          pageSize: 30
        }
      });

      set({ news: res.data.articles });

    } catch (error) {
      console.error("Ошибка загрузки новостей:", error);
    } finally {
      set({ isLoading: false });
    }
  }
}));


export const useFavoritesStore = create((set) => ({
  favorites: [],

  // Добавление
  addToFavorites: async (item) => {
    try {
      const res = await axios.post("https://687779a8dba809d901ef8e66.mockapi.io/test/card", item);
      set((state) => ({
        favorites: [...state.favorites, res.data],
      }));
    } catch (err) {
      console.error("Ошибка при добавлении в избранное:", err);
    }
  },

  // Удаление
  removeFromFavorites: async (id) => {
    try {
      await axios.delete(`https://687779a8dba809d901ef8e66.mockapi.io/test/card/${id}`);
      set((state) => ({
        favorites: state.favorites.filter(item => item.id !== id),
      }));
    } catch (err) {
      console.error("Ошибка при удалении из избранного:", err);
    }
  },

  // Загрузка всех избранных
  fetchFavorites: async () => {
    try {
      const res = await axios.get("https://687779a8dba809d901ef8e66.mockapi.io/test/card");
      set({ favorites: res.data });
    } catch (error) {
      console.error("Ошибка загрузки избранных:", error);
    }
  }
}


));
