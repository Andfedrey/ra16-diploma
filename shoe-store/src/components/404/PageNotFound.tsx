import React from 'react'
import { Banner } from '../banner/Banner'

export const PageNotFound: React.FC = () => {
  return (
    <>
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner></Banner>
          <section className="top-sales">
            <h2 className="text-center">Страница не найдена</h2>
            <p>
              Извините, такая страница не найдена!
            </p>
          </section>
        </div>
      </div>
    </main>
    </>
  )
}
