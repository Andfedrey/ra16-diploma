import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../customHook/useDebounce';
import { addText } from '../../redux/search/slice';
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';

export const Search: React.FC = () => {
  const { inputValue } = useAppSelector((state) => state.search);
  const { currentCategoryId } = useAppSelector((state) => state.categories);
  const debounse = useDebounce(inputValue, 300);
  const dispatch = useAppDispatch();

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    dispatch(addText(text));
  };

  useEffect(() => {
    dispatch(fetchCatalogShoes({ q: debounse, categories: currentCategoryId }));
  }, [debounse]);

  return (
    <form className="catalog-search-form form-inline">
      <input
        className="form-control"
        placeholder="Поиск"
        value={inputValue}
        onChange={changeHandle}
      />
    </form>
  );
};
