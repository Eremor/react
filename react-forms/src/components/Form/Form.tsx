import React, { useEffect, useState } from 'react';
import { IFormValue } from '../../interface/iformvalue';
import { IValidateForm } from '../../interface/ivalidateform';
import './form.scss';

export const Form = ({ setFormValue }: any): JSX.Element => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [nationality, setNationality] = useState('Russian');
  const [gender, setGender] = useState('male');
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState<IValidateForm>({});

  const validateForm = (): void => {
    setErrors({});
    if (firstName === '') {
      setErrors((state: IValidateForm) => ({ ...state, firstName }));
    }
    if (lastName === '') {
      setErrors((state: IValidateForm) => ({ ...state, lastName }));
    }
    if (!agree) {
      setErrors((state: IValidateForm) => ({ ...state, agree }));
    }
    if (birthday === '') {
      setErrors((state: IValidateForm) => ({ ...state, birthday }));
    }
  };

  useEffect(() => {
    validateForm();
  }, [firstName, lastName, birthday, agree]);

  const resetForm = (): void => {
    setFirstName('');
    setLastName('');
    setBirthday('');
    setNationality('Russian');
    setGender('male');
    setAgree(false);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setFormValue((state: Array<IFormValue>) => [
        ...state,
        { firstName, lastName, birthday, nationality, gender },
      ]);

      resetForm();
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__name" htmlFor="firstName">
        Name:
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        {errors?.firstName === '' && (
          <span className="error">* enter the name</span>
        )}
      </label>
      <label className="form__surname" htmlFor="lastName">
        Surname:
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        {errors?.lastName === '' && (
          <span className="error">* enter the surname</span>
        )}
      </label>
      <label className="form__data" htmlFor="birthday">
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
        />
        {errors?.birthday === '' && (
          <span className="error">* select date of birth</span>
        )}
      </label>
      <div className="form__container">
        <select
          className="form__nation"
          name="nationality"
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
        >
          <option value="Russian">Russian</option>
          <option value="Belarus">Belarus</option>
          <option value="Cypriot">Cypriot</option>
          <option value="Greek">Greek</option>
        </select>
      </div>
      <div className="form__switcher">
        <input
          className="visually-hidden"
          type="radio"
          name="gender"
          id="male"
          checked
          onChange={() => setGender('male')}
        />
        <label className="form__male" htmlFor="male" />
        <input
          className="visually-hidden"
          type="radio"
          name="gender"
          id="female"
          onChange={() => setGender('female')}
        />
        <label className="form__female" htmlFor="female" />
      </div>
      <label className="form__agree" htmlFor="agree">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          checked={agree}
          onChange={() => setAgree((prev) => !prev)}
        />
        I agree to the processing of data
        {errors?.agree !== undefined && (
          <span className="error">* agree should be check</span>
        )}
      </label>
      <button className="form__button" type="submit">
        Send
      </button>
    </form>
  );
};
