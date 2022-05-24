import Button from 'components/Buttons/Button/Button';
import { useContext, useState } from 'react';
import { ThemeContext, UserTheme } from 'context/ThemeContext';
import PaletteRadioButton from 'components/RadioButton/PaletteRadioButton';
import { nullToString } from 'common/utils/isNull';
import { toast } from 'react-toastify';

const paletteOptions = [
  {
    id: 'first',
    labelImg: '/assets/images/col1.png',
  },
  {
    id: 'second',
    labelImg: '/assets/images/col2.png',
  },
  {
    id: 'third',
    labelImg: '/assets/images/col3.png',
  },
];

const SeleccionColor = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  const [palette, setPalette] = useState<string>(themeColor || 'default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPalette(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setThemeColor(palette);
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.colorTheme = palette;
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración guardada');
  };

  const handleRevert = () => {
    setPalette('default');
    setThemeColor('default');
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.colorTheme = 'default';
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración por defecto');
  };

  return (
    <>
      <h4>
        Escoja la paleta de colores que se le acomode mejor y presione el botón
        "Guardar"
      </h4>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row">
          {paletteOptions.map((opt) => {
            return (
              <div className="col btn">
                <PaletteRadioButton
                  id={opt.id}
                  name="colorVariations"
                  imgUrl={opt.labelImg}
                  onChange={handleChange}
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

export default SeleccionColor;
