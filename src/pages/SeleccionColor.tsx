import Button from 'components/Button/Button';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'context/ThemeContext';
import PaletteRadioButton from 'components/RadioButton/PaletteRadioButton';

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
  const [palette, setPalette] = useState<string>(
    localStorage.getItem('user-theme') || 'default'
  );

  const { setTheme } = useContext(ThemeContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPalette(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTheme(palette);
    localStorage.setItem('user-theme', palette);
  };

  const handleRevert = () => {
    setPalette('default');
    setTheme('default');
    localStorage.setItem('user-theme', 'default');
  };

  return (
    <Wrapper>
      <div className="py-4 w-100 d-flex flex-column justify-content-center align-items-center">
        <div
          style={{ maxWidth: '1300px' }}
          className="w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <Header>Configuración</Header>
          <div
            style={{ maxWidth: '1300px' }}
            className="container card my-3 p-2 w-100 justify-content-center"
          >
            <div className="row py-1 ">
              <div className="col-3">
                <div className="list-group">
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Información
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Fuente
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Cursor
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action"
                  >
                    Brillo
                  </Link>
                  <Link
                    to="#"
                    className="list-group-item list-group-item-action active"
                  >
                    Daltónicos
                  </Link>
                </div>
              </div>
              <div className="col-9">
                <h4>
                  Escoja la paleta de colores que se le acomode mejor y presione
                  el botón "Guardar"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SeleccionColor;
