import { Link } from 'react-router-dom';
import './CardCourse.scss';
import Button from 'components/Button/Button';
import { BASE_URL } from 'common/constants';
type Props = {
  id?: number;
  image: string;
  description?: string;
  title: string;
  day_of_the_week?: string;
  time_start?: string;
  time_end?: string;
};

const defaultImg =
  'https://vilmanunez.com/wp-content/uploads/2016/03/herramientas-y-recursos-para-crear-curso-online.png';

const CardCourse = ({
  id = 0,
  image,
  title,
  day_of_the_week,
  time_start,
  time_end,
}: Props) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 px-auto py-1" key={id}>
      <div className="card">
        <div className="card-body ">
          <div className="row py-2  ">
            <img
              src={image || defaultImg}
              height="180rem"
              className="card-img-top"
              alt=""
            />
          </div>
          <div className="row">
            <h5 className="card-title mt-2">{title}</h5>
          </div>
          <div className="row ">
            <p className="card-text py-2 border-top border-primary">Horario:</p>
          </div>
          <div className="row">
            <div>
              <ul>
                <li>
                  <p className="card-text ">
                    Día: <b>{day_of_the_week}</b>
                  </p>
                </li>
                <li>
                  <p className="card-text ">Hora Inicio: {time_start} </p>
                </li>
                <li>
                  <p className="card-text ">Hora Fin: {time_end}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row pt-2">
            <div className=" d-flex justify-content-center">
              <Link to={`/curso/${id}/detalles`}>
                <Button className="mx-1" color="primary" elevated>
                  Ir al Curso
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
