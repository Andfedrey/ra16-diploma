import { counterPrice } from './cartFunctions';

export const checkingProduct = (item, arr) => {
  const { id, sizes, counter: count } = item;
  const index = arr.findIndex((el) => el.id === id && el.sizes === sizes);
  if (index > -1) {
    return (arr = arr.map((el) => {
      if (el.id === id) {
        const a = el.counter + count;
        return { ...el, counter: a };
      }
      return el;
    }));
  } else {
    return [...arr, item];
  }
};

export const useLocalStorage = (key: string, initialValue: any) => {
  const data = JSON.parse(localStorage.getItem(key)) || [];
  const newProduct = checkingProduct(initialValue, data);
  localStorage.clear();
  localStorage.setItem(key, JSON.stringify(newProduct));
  const price = counterPrice(newProduct);
  return {
    items: newProduct,
    price,
  };
};
