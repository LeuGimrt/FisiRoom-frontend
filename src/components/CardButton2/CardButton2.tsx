import { useState } from 'react';
import './CardButton2.scss';
import Media from 'react-media';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';

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

const Cardbutton2 = ({
  title,
  description,
  buttonlabel,
  background,
  height,
  ruta,
}: Props) => {
  const backgroundCardHover = `linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.7)), url(${
    background ? background : defaultImg
  })`;
  const backgroundCard = `linear-gradient(rgba(255,255,255,0.2), rgba(255,255,255,0.3)), url(${
    background ? background : defaultImg
  })`;

  const backgroundText =
    ' linear-gradient(rgba(159,77,21,0.5), rgba(159,77,21,0.15))';
  //estados de animacion
  const [backgroundCardstate, setbackgroundCardstate] =
    useState(backgroundCard);
  const [pointer, setPointer] = useState('not pointer');
  const [heightValue, setHeightValue] = useState(
    height ? height : defaultHeight
  );
  const [showcontent, setShowcontent] = useState('none');
  const navigate = useNavigate();
  const [showtext, setShowtext] = useState({
    display: 'flex',
    height: '0rem ',
    opacity: '0',
    transition: '0.5s',
  });
  return (
    <>
      <div
        //set states
        onClick={() => console.log('accediendo a seccion')}
        onMouseOver={() => {
          setbackgroundCardstate(backgroundCardHover);
          setPointer('pointer');
          setShowtext({
            display: 'flex',
            height: '7rem',
            opacity: '1',
            transition: '0.5s',
          });
        }}
        onMouseOut={() => {
          setbackgroundCardstate(backgroundCard);
          setPointer('not pointer');
          setShowtext({
            display: 'flex',
            height: '0rem',
            opacity: '0',
            transition: '.5s',
          });
        }}
        //basic styles
        className="row  cardimg  align-items-end text-center m-1"
        style={{
          backgroundImage: backgroundCardstate,
          cursor: pointer,
          height: heightValue ? heightValue : defaultHeight,
          boxShadow: '5px 7px 5px 1px  #888888',
        }}
      >
        <div
          className="col-12 "
          style={{
            // display: 'none',
            background: backgroundText,
            marginLeft: '0.05rem',
            marginRight: '0.05rem',
          }}
        >
          <div className="col-12 pb-1 pt-4 px-4">
            <h3>
              <strong>{title}</strong>
            </h3>
          </div>
          <div className="col-12 py-1 px-4" style={showtext}>
            <p>
              <strong>{description}</strong>
            </p>
          </div>
          <div className="row d-flex justify-content-center pb-4">
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
export default Cardbutton2;
