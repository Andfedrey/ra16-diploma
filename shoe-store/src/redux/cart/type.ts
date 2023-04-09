export type CartItems = {
  category?: number;
  color?: string;
  counter: number;
  heelSize?: string;
  id?: number;
  images?: string[];
  manufacturer?: string;
  material?: string;
  price?: number;
  reason?: string;
  season?: string;
  sizes: string;
  sku?: string;
  title?: string;
};
export interface CartSliceState {
  items: CartItems[] | [];
  numberOfProduct: number;
  price: number | false;
  count: number;
}

export type actionDeleteType = { id?: number; size?: string };
