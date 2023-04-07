import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction'
import { Loader } from '../loader/Loader'
import { LoadMore } from '../loadMore/LoadMore'
import { OneProduct } from '../oneProduct/OneProduct'

export const Cards: React.FC = () => {
  const { items, status } = useSelector((state) => (state.catalogShoes))
  const { currenCategoryId } = useSelector(state => state.categories)
  const { inputValue } = useSelector(state => state.search)
  const [loader, setLoader] = useState(true)
  const dispatch = useDispatch()
  const ref = useRef(0)

  useEffect(() => {
    let t
    if (status === 'loading') {
      setLoader(true)
      t = setTimeout(() => {
        setLoader(false)
      }, 1000)
    }
    if (status === 'success') {
      return () => { clearTimeout(t) }
    }
  }, [status])
  useEffect(() => {
    ref.current = 0
    dispatch(fetchCatalogShoes({ categories: currenCategoryId, offset: ref.current, q: inputValue }))
  }, [currenCategoryId])
  const clickHandle = (): void => {
    ref.current += 6
    dispatch(fetchCatalogShoes({ categories: currenCategoryId, offset: ref.current }))
  }

  return (
    <div>
      <div className="row">
        {
          (loader)
            ? (
            <Loader></Loader>
              )
            : (
                items?.map((el, id) => (
            <div className='col-4' key={el.id}>
              <OneProduct product={el}></OneProduct>
            </div>
                ))
              )
        }
      </div>
      < div className={`text-center ${items.length < 6 && 'hidden'}`} >
        <LoadMore clickHandle={clickHandle}></LoadMore>
      </div>
    </div>
  )
}
