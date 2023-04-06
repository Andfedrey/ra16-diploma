import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { useLocalStorage } from '../../customHook/useLocalstorage'
import { addProductsInCart } from '../../redux/cart/slice'
import { decrementProduct, incrementProduct, backToInitialValue } from '../../redux/product/slice'
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction'
import { Banner } from '../banner/Banner'

export const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { oneItem } = useSelector((state) => state.catalogShoes)
  const { count } = useSelector(state => state.product)
  const [img, setImg] = useState([])
  const [sizes, setSizes] = useState([])
  const [loading, setLoading] = useState(true)
  const [choiceSize, setChoiceSize] = useState(0)
  const navigate = useNavigate()
  const refSize = useRef()

  const checkSize = (id, size) => {
    refSize.current = id
    setChoiceSize(size)
  }

  useEffect(() => {
    dispatch(fetchCatalogShoes({ id }))
  }, [])
  useEffect(() => {
    if (oneItem?.images) {
      setImg(oneItem.images)
      setSizes(oneItem.sizes.filter(el => el.available))
    }
  }, [oneItem])

  useEffect(() => {
    const timeset = setTimeout(() => {
      setLoading(false)
    }, 500)
    return () => {
      clearTimeout(timeset)
    }
  }, [])

  const buyProduct = () => {
    (choiceSize) ? navigate('/cart') : alert('выберите размер')
    dispatch(backToInitialValue())
  }

  const addToLocalStorage = () => {
    const newProductToAdd = { ...oneItem, sizes: choiceSize, counter: count }
    dispatch(addProductsInCart(newProductToAdd))
    useLocalStorage('userCart', newProductToAdd)
  }

  return (
    <>
    {oneItem &&
    <main className="container">
      <div className="row">
            <div className="col">
                <Banner></Banner>
                <section className="catalog-item">
                    <h2 className="text-center">{oneItem.title}</h2>
                    <div className="row">
                        <div className="col-5">
                            {loading
                              ? (<h1>Loading</h1>)
                              : (
                                <img src={img[0]}
                                className="img-fluid" alt=""/>
                                )}
                        </div>
                        <div className="col-7">
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>
                                        <td>Артикул</td>
                                        <td>{oneItem.sku}</td>
                                    </tr>
                                    <tr>
                                        <td>Производитель</td>
                                        <td>{oneItem.manufacturer}</td>
                                    </tr>
                                    <tr>
                                        <td>Цвет</td>
                                        <td>{oneItem.color}</td>
                                    </tr>
                                    <tr>
                                        <td>Материалы</td>
                                        <td>{oneItem.material}</td>
                                    </tr>
                                    <tr>
                                        <td>Сезон</td>
                                        <td>{oneItem.season}</td>
                                    </tr>
                                    <tr>
                                        <td>Повод</td>
                                        <td>{oneItem.reason}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="text-center">
                                <p>Размеры в наличии: </p> {
                                  sizes.length >= 1
                                    ? (
                                      <>
                                        {sizes.map((el, id) => (
                                        <span className={`catalog-item-size ${(refSize.current === id) ? 'selected' : ''} `} key={id} onClick={(e) => { checkSize(id, el.size) }}>
                                          {el.size}
                                        </span>
                                        ))}
                                        <p>Количество:</p>
                                          <span className="btn-group btn-group-sm pl-2">
                                            <button className="btn btn-secondary" onClick={() => dispatch(decrementProduct())}>-</button>
                                            <span className="btn btn-outline-primary">{count}</span>
                                            <button className="btn btn-secondary" onClick={() => dispatch(incrementProduct())}>+</button>
                                          </span>
                                      </>
                                      )
                                    : (
                                      <span className='catalog-item-size'>
                                        размеров нет
                                      </span>
                                      )}
                            </div>
                            {
                              sizes.length >= 1
                                ? <button className="btn btn-danger btn-block btn-lg" onClick={() => { buyProduct(), addToLocalStorage() }}>В корзину</button>
                                : <button className="btn btn-danger btn-block btn-lg" onClick={() => { navigate('/catalog') }}>Вернуться в католог</button>
                            }
                        </div>
                    </div>
                </section>
            </div>
      </div>
    </main>
    }
    </>
  )
}
