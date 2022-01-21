import { nullToString } from 'common/utils/isNull';
import Button from 'components/Button/Button';
import CursorRadioButton from 'components/RadioButton/CursorRadioButton';
import { ThemeContext, UserTheme } from 'context/ThemeContext';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const cursorOptions = [
  {
    id: 0,
    labelImg: '/assets/images/cursor1.png',
    label: 'Normal',
  },
  {
    id: 1,
    labelImg: '/assets/images/cursor2.png',
    label: 'Grande',
  },
  {
    id: 2,
    labelImg: '/assets/images/cursor3.png',
    label: 'Muy grande',
  },
];
const SeleccionCursor = () => {
  const { cursorSize, setCursorSize } = useContext(ThemeContext);

  const [size, setSize] = useState<number>(cursorSize || 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCursorSize(size);
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.cursorSize = size;
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración guardada');
  };

  const handleRevert = () => {
    setSize(0);
    setCursorSize(0);
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.cursorSize = 0;
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración por defecto');
  };
  return (
    <>
      <h4>
        Escoja el tamaño del cursor que se le acomode mejor y presione el botón
        "Guardar"
      </h4>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row">
          {cursorOptions.map((opt) => {
            return (
              <div className="col btn">
                <CursorRadioButton
                  id={String(opt.id)}
                  name="colorVariations"
                  imgUrl={opt.labelImg}
                  onChange={handleChange}
                  label={opt.label}
                  value={String(opt.id)}
                  checked={size === opt.id}
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
