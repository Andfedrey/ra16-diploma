import { CartItems } from '../redux/cart/type';
import { counterPrice } from './cartFunctions';

export const checkingProduct = (item: CartItems, arr: CartItems[]) => {
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

export const useLocalStorage = (key: string, initialValue: CartItems) => {
  const dataJson = localStorage.getItem(key);
  const data = dataJson ? JSON.parse(dataJson) : [];
  const newProduct = checkingProduct(initialValue, data);
  localStorage.setItem(key, JSON.stringify(newProduct));
  const price = counterPrice(newProduct);
  return {
    items: newProduct,
    price,
  };
};
