import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { addText } from '../../redux/search/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction';

export const Navbar = () => {
  const [searchFlag, setSearchFlag] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const clickHandle = () => {
    setSearchFlag((prev) => (prev += 1));
    if (searchFlag === 1) {
      navigate('/catalog');
      setSearchFlag(0);
    }
  };
  const { count } = useAppSelector((state) => state.cart);
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    dispatch(addText(e.target.value));
  };
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <NavLink className="navbar-brand" to="/">
                <img src=".././img/header-logo.png" alt="Bosa Noga" />
              </NavLink>
              <div className="collapase navbar-collapse" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={() => dispatch(addText(''))}>
                      Главная
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/catalog">
                      Каталог
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      О магазине
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contacts">
                      Контакты
                    </NavLink>
                  </li>
                </ul>
                <div>
                  <div className="header-controls-pics">
                    <div
                      data-id="search-expander"
                      className="header-controls-pic header-controls-search"
                      onClick={clickHandle}
                    ></div>
                    <Link
                      to="/cart"
                      className="header-controls-pic header-controls-cart"
                    >
                      {count > 0 && (
                        <div className="header-controls-cart-full">{count}</div>
                      )}
                      <div className="header-controls-cart-menu"></div>
                    </Link>
                  </div>
                  <form
                    data-id="search-form"
                    className={`header-controls-search-form form-inline ${
                      searchFlag ? '' : 'invisible'
                    }`}
                  >
                    <input
                      className="form-control"
                      placeholder="Поиск"
                      value={inputValue}
                      onChange={changeHandle}
                    />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
