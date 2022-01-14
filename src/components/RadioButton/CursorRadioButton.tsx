type Props = {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  value: string;
  imgUrl: string;
  name: string;
  id: string;
};

const CursorRadioButton = ({
  checked,
  onChange,
  label,
  value,
  imgUrl,
  name,
  id,
}: Props) => {
  return (
    <>
      <input
        className="btn-check"
        type="radio"
        name={name}
        id={id}
        autoComplete="off"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className={`btn ${checked ? 'selected' : ''}`} htmlFor={id}>
        <img src={imgUrl} alt={id} />
        <p>{label}</p>
      </label>
    </>
  );
};

export default CursorRadioButton;
