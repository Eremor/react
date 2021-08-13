import React, { useState } from 'react';
import { Form } from '../form/Form';
import './dashboard.scss';

export const Dashboard = (): JSX.Element => {
  const [queryValue, setQueryValue] = useState<string>('');

  return (
    <div className="dashboard">
      <Form setFormValue={setQueryValue} />
    </div>
  );
};
