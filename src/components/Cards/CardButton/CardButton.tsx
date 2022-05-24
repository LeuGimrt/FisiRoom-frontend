import { type } from 'os';
import { useState } from 'react';
import './CardButton.scss';
import Media from 'react-media';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Buttons/Button/Button';

type Props = {
  title: string;
  description?: string;
  buttonlabel?: string;
  background?: string;
  height?: string;
  ruta?: string;
};
const defaultImg = '/assets/images/ilonka.jpg';
const defaultHeight = 'auto';
const defaultRuta = '/dashboard';

const Cardbutton = ({
  title,
  description,
  buttonlabel,
  background,
  height,
  ruta,
}: Props) => {
  const textHover = `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.8)), url(${
    background ? background : defaultImg
  })`;
  const text = `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.5)), url(${
    background ? background : defaultImg
  })`;
  const [texto, setTexto] = useState(text);
  const [pointer, setPointer] = useState('not pointer');
  const [heightValue, setHeightValue] = useState(
    height ? height : defaultHeight
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        onClick={() => console.log('accediendo a seccion')}
        onMouseOver={() => {
          setTexto(textHover);
          setPointer('pointer');
        }}
        onMouseOut={() => {
          setTexto(text);
          setPointer('not pointer');
        }}
        className="row cardimg  align-items-center text-center m-1"
        style={{
          backgroundImage: texto,
          cursor: pointer,
          height: heightValue ? heightValue : defaultHeight,
          boxShadow: '5px 7px 5px 1px #888888',
        }}
      >
        <div className="col-12">
          <div className="col-12 pb-1 pt-4 px-4">
            <h3>
              <strong>{title}</strong>
            </h3>
          </div>
          <div className="col-12 py-1 px-4">
            <p>
              <strong>{description}</strong>
            </p>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12">
              <Button
                type="submit"
                size="lg"
                color="primary"
                elevated
                onClick={() => {
                  navigate(ruta ? ruta : defaultRuta);
                }}
              >
                Ir
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cardbutton;
