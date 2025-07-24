import { create } from 'zustand';
import axios from 'axios';
import favorites from '../components/favorites';

export const useNewsStore = create((set) => ({
  news: [],

  fetchNews: async ({ query }) => {
    try {
      const res = await axios.get("https://newsapi.org/v2/top-headlines", {
        params: {
          q: query,
          country: "us",
          sortby: "popularity",
          apiKey: "0c13cdcbef204accae08c1725be97c20",
          pageSize: 30
        }
      });

      set({ news: res.data.articles });

    } catch (error) {
      console.error("Ошибка загрузки новостей:", error);
    }
  }

}

));

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
