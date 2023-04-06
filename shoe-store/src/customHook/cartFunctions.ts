export const counterPrice = (items) => {
  return Array.isArray(items) && items?.map(item => item.price * item.counter).reduce((acc, val) => acc + val, 0)
}

export const getCounteOfProducts = (items) => {
  return Array.isArray(items) && items?.reduce((acc, val) => acc + val.counter, 0)
}

export const deleteProductInCart = (id, size) => {
  const items = JSON.parse(localStorage.getItem('userCart'))
  if (!Array.isArray(items)) {
    return
  }
  const newItems = items.filter(el => el.id !== id || el.sizes !== size)
  localStorage.setItem('userCart', JSON.stringify(newItems))
}

export const getCountProduct = (item) => {
  return item.reduce((acc, val) => (acc + val.counter), 0)
}
export const createInitialStateCart = () => {
  const info = JSON.parse(localStorage.getItem('userCart'))
  const price = counterPrice(info)
  const numberOfProduct = getCounteOfProducts(info)
  const counter = getCountProduct(info)

  return {
    items: info,
    numberOfProduct,
    price,
    counter
  }
}
