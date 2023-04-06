import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchShoes } from '../../redux/top-shoes/asyncAction'
import { OneProduct } from '../oneProduct/OneProduct'

export const Hits: React.FC = () => {
  const { items, status, error } = useSelector((state) => (state.shoes))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShoes())
  }, [])

  return (
    <>
      {error && <h1>{error}</h1>}
      {
        status === 'pending'
          ? (
          <h1>Loading...</h1>
            )
          : (
          <div className="row">
          <div className="col">
            <section className="catalog">
            <h2 className="text-center">Хиты продаж!</h2>
              <div className="row">
                {
                  items?.map((el, id) => (
                    <div className='col-4' key={el.id}>
                      <OneProduct product={el}></OneProduct>
                    </div>
                  ))
                }
              </div>
            </section>
          </div>
        </div>
            )
      }
      </>
  )
}
