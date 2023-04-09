import React from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteProductInCart } from '../../customHook/cartFunctions';
import { deleteProduct } from '../../redux/cart/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';

export const Cart: React.FC = () => {
  const { items, price } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const deleteHandle = (id?: number, size?: string) => {
    const a = { id, size };
    deleteProductInCart(a);
    dispatch(deleteProduct(a));
  };
  const navigate = useNavigate();

  return (
    <>
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img
                src="./img/banner.jpg"
                className="img-fluid"
                alt="К весне готовы!"
              />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
            <section className="cart">
              <h2 className="text-center">Корзина</h2>
              {items?.length ? (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Название</th>
                      <th scope="col">Размер</th>
                      <th scope="col">Кол-во</th>
                      <th scope="col">Стоимость</th>
                      <th scope="col">Итого</th>
                      <th scope="col">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, i) => (
                      <tr key={item.id}>
                        <td scope="row">{i + 1}</td>
                        <td>
                          <a href="/products/1.html">{item.title}</a>
                        </td>
                        <td>{item.sizes}</td>
                        <td>{item.counter}</td>
                        <td>{item.price}</td>
                        <td>{item.price && item.price * item.counter}</td>
                        <td>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => {
                              deleteHandle(item.id, item.sizes);
                            }}
                          >
                            Удалить
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={5} className="text-right">
                        Общая стоимость
                      </td>
                      <td>{price}</td>
                    </tr>
                  </tbody>
                </table>
              ) : (
                <>
                  <h1>У вас нет покупок</h1>
                  <button
                    className="btn btn-danger btn-block btn-lg"
                    onClick={() => {
                      navigate('/catalog');
                    }}
                  >
                    Вернуться в католог
                  </button>
                </>
              )}
            </section>
            <section className="order">
              <h2 className="text-center">Оформить заказ</h2>
              <div
                className="card"
                style={{ maxWidth: '30rem', margin: '0 auto' }}
              >
                <form className="card-body">
                  <div className="form-group">
                    <label htmlFor="phone">Телефон</label>
                    <input
                      className="form-control"
                      id="phone"
                      placeholder="Ваш телефон"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address">Адрес доставки</label>
                    <input
                      className="form-control"
                      id="address"
                      placeholder="Адрес доставки"
                    />
                  </div>
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreement"
                    />
                    <label className="form-check-label" htmlFor="agreement">
                      Согласен с правилами доставки
                    </label>
                  </div>
                  <button type="submit" className="btn btn-outline-secondary">
                    Оформить
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};
