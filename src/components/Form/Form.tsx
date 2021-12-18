import { Input, Select, TextArea } from 'common/types';
import Button from 'components/Button/Button';
import { useState } from 'react';

type Props = {
  inputs: Input[];
  textAreas: TextArea[];
  selects: Select[];
  callback: Function;
  btnLabel: string;
};

const Form = ({ inputs, callback, btnLabel, textAreas, selects }: Props) => {
  const [data, setData] = useState({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    e.currentTarget.className += ' was-validated';
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } else {
      e.preventDefault();
      callback(data);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  return (
    <form noValidate onSubmit={handleSubmit}>
      {selects.map((select) => {
        return (
          <div className="form-group my-3">
            <label htmlFor={select.name} className="form-label">
              {select.label}
            </label>
            <select
              className="form-select"
              id={select.name}
              name={select.name}
              placeholder={select.placeholder}
              required={select.required}
              onChange={handleChange}
            >
              <option disabled selected value="">
                -- Elija un día --
              </option>
              {select.options.map((option) => {
                return <option value={option.id}>{option.name}</option>;
              })}
            </select>
            <div className="valid-feedback">{select.validFeedback}</div>
            <div className="invalid-feedback">{select.invalidFeedback}</div>
          </div>
        );
      })}
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
      {textAreas.map((textArea) => {
        return (
          <div className="form-group my-3">
            <label htmlFor={textArea.name} className="form-label">
              {textArea.label}
            </label>
            <textarea
              maxLength={textArea.maxLength}
              minLength={textArea.minLength}
              className="form-control"
              id={textArea.name}
              name={textArea.name}
              placeholder={textArea.placeholder}
              required={textArea.required}
              rows={textArea.rows}
              onChange={handleChange}
            />
            <div className="valid-feedback">{textArea.validFeedback}</div>
            <div className="invalid-feedback">{textArea.invalidFeedback}</div>
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
