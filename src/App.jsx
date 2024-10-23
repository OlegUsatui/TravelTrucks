import './App.module.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';

const HomePage = React.lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = React.lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage/NotFoundPage.jsx'));
const CamperDetailsPage = React.lazy(() => import('./pages/CamperDetailsPage/CamperDetailsPage.jsx'));
const CamperFeatures = React.lazy(() => import('./components/CamperFeatures/CamperFeatures.jsx'));
const CamperReviews = React.lazy(() => import('./components/CamperReviews/CamperReviews.jsx'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:catalogId" element={<CamperDetailsPage />}>
            <Route path="features" element={<CamperFeatures />} />
            <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
