import { nullToString } from 'common/utils/isNull';
import Button from 'components/Button/Button';
import { ThemeContext, UserTheme } from 'context/ThemeContext';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const SeleccionFuente = () => {
  const { fontSize, setFontSize } = useContext(ThemeContext);

  const [font, setFont] = useState<string>(fontSize.toString());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFont(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(font) < 12 || parseInt(font) > 24) {
      toast.error('El tamaño de fuente debe ser mayor a 12 y menor a 24');
      return;
    }
    setFontSize(parseInt(font));
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.fontSize = parseInt(font);
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración guardada');
  };

  const handleRevert = () => {
    setFont('16');
    setFontSize(16);
    let obj: UserTheme = JSON.parse(
      nullToString(localStorage.getItem('user-theme'))
    );
    obj.fontSize = 16;
    localStorage.setItem('user-theme', JSON.stringify(obj));
    toast.success('Configuración por defecto');
  };

  return (
    <>
      <h3>
        Escoja el tamaño de la fuente de su preferencia y de click en "Guardar"
      </h3>
      <form noValidate onSubmit={handleSubmit}>
        <div className="row justify-content-center text-center">
          <div className="col-3 m-5">
            <p style={{ fontSize: `${font}px` }}>Aa</p>
            <div className="form-group align-center ">
              <input
                type="number"
                id="typeNumber"
                className="form-control"
                value={font}
                onChange={handleChange}
              />
              <label className="form-label " htmlFor="typeNumber">
                Tamaño de la fuente (12 - 24)
              </label>
            </div>
          </div>
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

export default SeleccionFuente;
