import { create } from "zustand";
import { BeerItem } from "./types/BeerItem";
import { ListStore } from "./types/ListStore";

export const BeerStore = create<ListStore>()((set) => ({
  data: [],
  count: 1,

  loadData: async (url) => {
    const response = await fetch(url);
    const list: BeerItem[] = await response.json();

    set((state) => ({
      data: [...state.data, ...list],
      count: state.count + 1,
    }));
  },

  addActive: (id: number) =>
    set((state) => ({
      data: state.data.map((todo) =>
        todo.id === id
          ? todo.status === "active"
            ? { ...todo, status: "" }
            : { ...todo, status: "active" }
          : todo
      ),
    })),

  deleteItems: () =>
    set((state) => ({
      data: state.data.filter((todo) => todo.status !== "active"),
    })),
}));
