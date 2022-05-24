import Button from 'components/Buttons/Button/Button';
import { useState, useEffect } from 'react';
import './CardPosts.scss';
type Props = {
  width: string;
};

const defaultColor = 'rgb(10,14,22,1)';
const defaultColorStatus = 'rgb(10,14,22,1)';
const CardPosts = () => {
  const [widthCard, setWidthCard] = useState('0rem');
  const [colorCard, setColorCard] = useState(defaultColor);
  const [transitionCard, setTransitionCard] = useState('1.5s');
  const [widthCardStatus, setWidthCardStatus] = useState('0rem');
  const [colorCardStatus, setColorCardStatus] = useState(defaultColorStatus);
  const [transitionCardStatus, setTransitionCardStatus] = useState('1.5s');
  const [estadoEntrega, setestadoEntrega] = useState('');
  useEffect(() => {
    setWidthCard('75%');
    setTimeout(() => {
      setTransitionCard('0.2s');
      setestadoEntrega('Entregado');
      setWidthCardStatus('25%');
      setColorCardStatus('rgb(97, 255, 13, 1)');
      //   setColorCard('rgb(97, 255, 13, 1)');
    }, 700);
  }, []);

  let texto =
    'With supporting text below as a natural lead-in to additional content.Titulo de Post (puede ser tarea o simplemente un post con material)';

  let initialtext = texto.slice(0, 100);
  let aftertext = texto.slice(101);
  return (
    <>
      <div className="row">
        <div className="col-12 ">
          <div className=" row mx-0   ">
            <div
              className=" col-9 headercard borde-izquierda-arriba"
              style={{
                width: widthCard,
                transition: transitionCard,
                background: colorCard,
              }}
            />

            <div
              className="col-3 d-flex justify-content-center borde-derecha-arriba negrita"
              style={{
                width: widthCardStatus,
                transition: transitionCardStatus,
                background: colorCardStatus,
              }}
            >
              {estadoEntrega}
            </div>
          </div>
          <div
            className="row mx-0 borde-izquierda-abajo borde-derecha-abajo border"
            style={{ background: 'rgb(240,240,240,1)' }}
          >
            <div className="col-11">
              <div className="card-body">
                <h5 className="card-title mb-4">
                  Titulo de Post (puede ser tarea o simplemente un post con
                  material)
                </h5>
                <p className="card-text textito " style={{ height: '4rem' }}>
                  <span>{initialtext}</span> <span>... </span>
                  <span>Ver más</span>
                </p>
                <div className="border-top notificacion">
                  <p>
                    <strong>contiene archivos adjuntos *</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-1"></div>

            <div className="col-12 p-3 pt-1">
              <div className="d-grid gap-2 d-lg-flex justify-content-lg-end">
                <Button type="submit" size="lg" color="primary" elevated>
                  Ver más
                </Button>
                <Button type="submit" size="lg" color="dark" elevated>
                  Opciones
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardPosts;
