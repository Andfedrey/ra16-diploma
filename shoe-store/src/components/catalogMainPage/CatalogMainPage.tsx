import React from 'react'
import { Cards } from '../Cards/Cards'
import { Categories } from '../categories/Categories'

export const CatalogMainPage: React.FC = () => {
  return (
    <div className="row">
      <div className="col">
        <section className="catalog">
          <h2 className="text-center">Каталог</h2>
          <Categories></Categories>
          <Cards></Cards>
        </section>
      </div>
    </div>
  )
}
