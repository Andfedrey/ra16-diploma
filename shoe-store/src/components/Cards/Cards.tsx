import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction'
import { LoadMore } from '../loadMore/LoadMore'
import { OneProduct } from '../oneProduct/OneProduct'

export const Cards: React.FC = () => {
  const { items } = useSelector((state) => (state.catalogShoes))
  const { currenCategoryId } = useSelector(state => state.categories)
  const { inputValue } = useSelector(state => state.search)
  const dispatch = useDispatch()
  const ref = useRef(0)

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
          items?.map((el, id) => (
            <div className='col-4' key={el.id}>
              <OneProduct product={el}></OneProduct>
            </div>
          ))
        }
      </div>
      < div className={`text-center ${items.length < 6 && 'hidden'}`} >
        <LoadMore clickHandle={clickHandle}></LoadMore>
      </div>
    </div>
  )
}
