import Button from 'components/Button/Button';
import CursorRadioButton from 'components/RadioButton/CursorRadioButton';
import PaletteRadioButton from 'components/RadioButton/PaletteRadioButton';
import { ThemeContext } from 'context/ThemeContext';
import { useContext, useState } from 'react';

const paletteOptions = [
  {
    id: 'first',
    labelImg: '/assets/images/cursor1.png',
    label: 'Normal',
  },
  {
    id: 'second',
    labelImg: '/assets/images/cursor2.png',
    label: 'Grande',
  },
  {
    id: 'third',
    labelImg: '/assets/images/cursor3.png',
    label: 'Muy grande',
  },
];
const SeleccionCursor = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  const [palette, setPalette] = useState<string>(themeColor || 'default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPalette(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setThemeColor(palette);
    localStorage.setItem('user-theme', palette);
  };

  const handleRevert = () => {
    setPalette('default');
    setThemeColor('default');
    localStorage.setItem('user-theme', 'default');
  };
  return (
    <>
      <h4>
        Escoja el tamaño del cursor que se le acomode mejor y presione el botón
        "Guardar"
      </h4>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row">
          {paletteOptions.map((opt) => {
            return (
              <div className="col btn">
                <CursorRadioButton
                  id={opt.id}
                  name="colorVariations"
                  imgUrl={opt.labelImg}
                  onChange={handleChange}
                  label={opt.label}
                  value={opt.id}
                  checked={palette === opt.id}
                />
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <Button
              color="warning"
              size="lg"
              type="button"
              className="px-auto"
              onClick={handleRevert}
              elevated
            >
              Revertir
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button
              color="primary"
              size="lg"
              type="submit"
              className="px-auto"
              elevated
            >
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SeleccionCursor;
