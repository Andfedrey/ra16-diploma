import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { fetchShoes } from '../../redux/top-shoes/asyncAction';
import { Loader } from '../loader/Loader';
import { OneProduct } from '../oneProduct/OneProduct';

export const Hits: React.FC = () => {
  const { items, status, error } = useAppSelector((state) => state.shoes);
  const [loader, setLoader] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShoes());
  }, []);

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

  return (
    <>
      <div className="row">
        {error && <h1>{error}</h1>}
        {loader ? (
          <Loader></Loader>
        ) : (
          <div className="col">
            <section className="catalog">
              <h2 className="text-center">Хиты продаж!</h2>
              <div className="row">
                {items?.map((el, id) => (
                  <div className="col-4" key={el.id}>
                    <OneProduct product={el}></OneProduct>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </>
  );
};
