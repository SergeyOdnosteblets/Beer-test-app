import { BeerItem } from "./BeerItem";

export interface ListStore {
  data: BeerItem[] | [];
  loadData: (url: string) => Promise<void>;
  addActive: (id: number) => void;
  deleteItems: () => void;
  count: number;
}
