import { Link } from 'react-router-dom';
import './CardCourse.scss';
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
    <div className="col-md-4 col-lg-3 px-auto py-1" key={id}>
      <div className="card">
        <div className="card-body ">
          {/* <img src={image} height="180" className="card-img-top" /> */}
          <img src={image} height="180" className="card-img-top" alt="" />
          <h5 className="card-title mt-2">{title}</h5>
          <p className="card-text">{description}</p>
          <Link to="#" className="btn btn-primary">
            Go somewhere
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardCourse;
