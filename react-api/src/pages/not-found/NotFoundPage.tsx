import React from 'react';
import '../pages.scss';

export const NotFoundPage = (): JSX.Element => {
  return (
    <section className="not-found">
      <p className="not-found__text">Sorry, can&apos;t find that.</p>
    </section>
  );
};
