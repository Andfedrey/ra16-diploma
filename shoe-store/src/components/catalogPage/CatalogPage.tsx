import React from 'react';
import { Banner } from '../banner/Banner';
import { Cards } from '../Cards/Cards';
import { Categories } from '../categories/Categories';
import { Search } from '../search/Search';

export const CatalogPage: React.FC = () => {
  return (
    <main className="container">
      <Banner />
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <Search></Search>
            <Categories></Categories>
            <Cards></Cards>
          </section>
        </div>
      </div>
    </main>
  );
};
