import React from 'react';
import { Banner } from '../banner/Banner';
import { CatalogMainPage } from '../catalogMainPage/CatalogMainPage';
import { Hits } from '../hits/Hits';

export const Main: React.FC = () => {
  return (
    <main className="container">
      <Banner />
      <Hits />
      <CatalogMainPage />
    </main>
  );
};
