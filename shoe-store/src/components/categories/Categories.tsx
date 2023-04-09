import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  choiseCategories,
  fetchCategories,
} from '../../redux/categories/slice';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';

export const Categories: React.FC = () => {
  const { types, currentCategoryId } = useAppSelector(
    (state) => state.categories
  );
  const dispatch = useAppDispatch();

  const refId = useRef(currentCategoryId);
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  const clickHandle = (id: number) => {
    refId.current = id;
    dispatch(choiseCategories(id));
  };

  return (
    <>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <Link
            className={`nav-link ${!refId.current ? 'active' : ''}`}
            to=""
            onClick={() => {
              clickHandle(0);
            }}
          >
            Все
          </Link>
        </li>
        {types.map((category: any) => (
          <li className="nav-item" key={category.id}>
            <Link
              className={`nav-link ${
                refId.current === category.id ? 'active' : ''
              }`}
              to=""
              onClick={() => {
                clickHandle(category.id);
              }}
            >
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
