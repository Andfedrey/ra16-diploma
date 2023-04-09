export type CategoryType = {
  id: number;
  title: string;
  status: boolean;
};

export type FetchCategoryType = {
  id: number;
  title: string;
};

export interface CategoryInterface {
  currentCategoryId: number;
  types: CategoryType[];
}
