import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDebounce } from '../../customHook/useDebounce'
import { addText } from '../../redux/search/slice'
import { fetchCatalogShoes } from '../../redux/shoes/asyncAction'

export const Search: React.FC = () => {
  const { inputValue } = useSelector(state => state.search)
  const { currenCategoryId } = useSelector(state => state.categories)
  const debounse = useDebounce(inputValue, 300)
  const dispatch = useDispatch()

  const changeHandle = (e) => {
    const text = e.target.value
    dispatch(addText(text))
  }

  useEffect(() => {
    dispatch(fetchCatalogShoes({ q: debounse, categories: currenCategoryId }))
  }, [debounse])

  return (
    <form className="catalog-search-form form-inline">
      <input className="form-control" placeholder="Поиск" value={inputValue} onChange={changeHandle}/>
    </form>
  )
}
