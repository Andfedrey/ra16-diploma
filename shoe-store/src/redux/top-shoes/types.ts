export interface Shoes {
  id: number;
  category: number;
  title: string;
  price: number;
  images: string[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface ShoesSliceState {
  items: Shoes[];
  status: Status;
  error: string;
}
