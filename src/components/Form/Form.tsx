import { Input } from 'common/types';
import Button from 'components/Button/Button';
import { useState } from 'react';

type Props = {
  inputs: Input[];
  callback: Function;
  btnLabel: string;
};

const Form = ({ inputs, callback, btnLabel }: Props) => {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form=e.currentTarget;
    e.currentTarget.className+= " was-validated";
    if(form.checkValidity()===false){
      e.preventDefault();
      e.stopPropagation();
    }
    else{
      e.preventDefault();
      callback(data);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {inputs.map((input) => {
        return (
          <div className="form-group my-3">
            <label htmlFor={input.name} className="form-label">
              {input.label}
            </label>
            <input
              maxLength={input.maxLength}
              minLength={input.minLength}
              className="form-control"
              type={input.type}
              id={input.name}
              name={input.name}
              placeholder={input.placeholder}
              onChange={handleChange}
              required={input.required}
            />
            <div className="valid-feedback">{input.validFeedback}</div>
            <div className="invalid-feedback">{input.invalidFeedback}</div>
          </div>
        );
      })}
      <div className="d-flex justify-content-center">
        <Button type="submit" size="lg" color="primary" elevated>
          {btnLabel}
        </Button>
      </div>
    </form>
  );
};

export default Form;
