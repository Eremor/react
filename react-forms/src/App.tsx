import React, { useState } from 'react';
import './app.scss';
import { Card } from './components/Card/Card';
import { Form } from './components/Form/Form';
import { IFormValue } from './interface/iformvalue';

const App = (): JSX.Element => {
  const [formValue, setFormValue] = useState<IFormValue[]>([]);

  return (
    <div className="app">
      <Form setFormValue={setFormValue} />
      <div className="wrapper">
        {formValue.map((item: IFormValue, index: number) => (
          <Card formData={item} key={index.toString()} />
        ))}
      </div>
    </div>
  );
};

export default App;
