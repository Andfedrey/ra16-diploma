import React from 'react'
import { Banner } from '../banner/Banner'
import Catalog from '../catalog/Catalog'
import { Hits } from '../hits/Hits'

export const Main = () => {
  return (
    <main className="container">
      <Banner/>
      <Hits/>
      <Catalog/>
    </main>
  )
}
