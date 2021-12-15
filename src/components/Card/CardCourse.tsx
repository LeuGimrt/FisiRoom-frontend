import { Link } from 'react-router-dom';
import './CardCourse.scss';
import Button from 'components/Button/Button';
type Props = {
  id?: number;
  image?: string;
  description?: string;
  title: string;
};

const CardCourse = ({
  id = 0,
  image = 'https://i.imgur.com/crEJgaf.gif.gif',
  description = '',
  title,
}: Props) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 px-auto py-1" key={id}>
      <div className="card">
        <div className="card-body ">
          <div className="row">
            <img src={image} height="180" className="card-img-top" alt="" />
          </div>
          <div className="row">
            <h5 className="card-title mt-2">{title}</h5>
          </div>
          <div className="row ">
            <p className="card-text">{description}</p>
          </div>
          <div className="row pt-2">
            <div className=" d-flex justify-content-center">
              <Link to="#">
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
