export interface ShoesInterface {
  id: number;
  category: number;
  title: string;
  images: string[];
  sku: string;
  manufacturer: string;
  color: string;
  material: string;
  reason: string;
  season: string;
  heelSize: string;
  price: number;
  oldPrice: number;
  sizes: { size: string; available: boolean }[];
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export interface CatalogShoesSlice {
  items: ShoesInterface[];
  oneItem: ShoesInterface | null;
  status: Status;
}

export interface ParamsInterface {
  categories?: number;
  offset?: number;
  q?: string;
  id?: string;
}

export interface FetchParams {
  product: ShoesInterface[] | ShoesInterface;
  productsArr: ShoesInterface[];
}
