import { actionDeleteType, CartItems } from '../redux/cart/type';

export const counterPrice = (items: CartItems[]) => {
  const allPrices =
    Array.isArray(items) &&
    items?.map((item) => item.price && item.price * item.counter);
  const totalAmount =
    Array.isArray(allPrices) &&
    allPrices?.reduce((acc: number, val) => (val ? acc + val : acc), 0);
  return totalAmount;
};

export const getCounteOfProducts = (items: CartItems[]) => {
  return (
    Array.isArray(items) &&
    items?.reduce((acc: number, val) => acc + val.counter, 0)
  );
};

export const deleteProductInCart = (info: actionDeleteType) => {
  const { id, size } = info;
  const dataJson = localStorage.getItem('userCart');
  const data = dataJson ? JSON.parse(dataJson) : null;
  if (!Array.isArray(data)) {
    return;
  }
  const newItems = data.filter((el) => el.id !== id || el.sizes !== size);
  localStorage.setItem('userCart', JSON.stringify(newItems));
};

export const getCountProduct = (item: CartItems[]) => {
  return item.reduce((acc, val) => acc + val.counter, 0);
};
export const createInitialStateCart = () => {
  const dataJson = localStorage.getItem('userCart');
  const info = dataJson ? JSON.parse(dataJson) : [];
  const price = counterPrice(info);
  const numberOfProduct = getCounteOfProducts(info);
  const counter = getCountProduct(info);

  return {
    items: info,
    numberOfProduct,
    price,
    counter,
  };
};
