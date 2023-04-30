import React, { useEffect, useRef, useState } from 'react';
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { Loader } from '../loader/Loader';
import { LoadMore } from '../loadMore/LoadMore';
import { OneProduct } from '../oneProduct/OneProduct';

export const Cards: React.FC = () => {
  const { items, status } = useAppSelector((state) => state.catalogShoes);
  const { currentCategoryId } = useAppSelector((state) => state.categories);
  const { inputValue } = useAppSelector((state) => state.search);
  const [loader, setLoader] = useState(true);
  const dispatch = useAppDispatch();
  const ref = useRef(0);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (status === 'loading') {
      setLoader(true);
      t = setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
    if (status === 'completed') {
      return () => {
        clearTimeout(t);
      };
    }
  }, [status]);

  useEffect(() => {
    ref.current = 0;
    dispatch(
      fetchCatalogShoes({
        categories: currentCategoryId,
        offset: ref.current,
        q: inputValue,
      })
    );
  }, [currentCategoryId]);
  const clickHandle = (): void => {
    ref.current += 6;
    dispatch(
      fetchCatalogShoes({ categories: currentCategoryId, offset: ref.current })
    );
  };

  if(items.length === 0) {
    return(
      <h1>Товара нет в наличии</h1>
    )
  }

  if(loader) {
    return (
      <Loader></Loader>
    )
  }

  return (
    <div>
      <div className="row">
          {items?.map((el, id) => (
            <div className="col-4" key={el.id}>
              <OneProduct product={el}></OneProduct>
            </div>
          ))}
      </div>
      <div className={`text-center ${items.length < 6 && 'hidden'}`}>
        <LoadMore clickHandle={clickHandle}></LoadMore>
      </div>
    </div>
  );
};
