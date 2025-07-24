import { create } from 'zustand';
import axios from 'axios';

export const useNewsStore = create((set) => ({
  news: [],

  fetchNews: async ({query}) => {
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
