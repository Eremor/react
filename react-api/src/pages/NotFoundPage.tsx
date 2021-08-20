import React from 'react';
import { Route } from 'react-router-dom';

type StatusType = {
  code: number;
  children: any;
};

function Status({ code, children }: StatusType) {
  return (
    <Route
      render={({ staticContext }: any) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

export const NotFoundPage = (): JSX.Element => {
  return (
    <Status code={404}>
      <section>
        <h1>Sorry, can&apos;t find that.</h1>
      </section>
    </Status>
  );
};
