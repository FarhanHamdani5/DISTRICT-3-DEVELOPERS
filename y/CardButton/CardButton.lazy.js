import React, { lazy, Suspense } from 'react';

const LazyCardButton = lazy(() => import('./CardButton'));

const CardButton = props => (
  <Suspense fallback={null}>
    <LazyCardButton {...props} />
  </Suspense>
);

export default CardButton;
