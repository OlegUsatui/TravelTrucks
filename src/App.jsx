import './App.module.css';
import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from '@components/Header/Header.jsx';
import Loader from '@components/Loader/Loader.jsx';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = React.lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));
const CamperDetailsPage = React.lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage.jsx'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:catalogId" element={<CamperDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
