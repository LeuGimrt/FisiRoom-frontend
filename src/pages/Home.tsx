import Wrapper from 'containers/Wrapper/Wrapper';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';

const Home = () => {
  return (
    <Wrapper>
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="d-flex flex-column align-items-center text-center col-12 col-md-6">
          <h1>
            Bienvenido a <span className="text-primary">HoloSchool</span>{' '}
          </h1>{' '}
          <br />
          <h3>Impulsa tu aprendizaje</h3>
          <h6>En todo lugar. En todo momento :)</h6>
          <Link
            style={{ maxWidth: 300 }}
            className="btn btn-primary px-5 mt-4"
            to="/login"
          >
            Empezar <ArrowRight className="ms-3" size={20} />
          </Link>
        </div>
        <div className="col-12 col-md-6 d-none d-md-flex justify-content-center">
          <img
            style={{ maxHeight: '60vh', minHeight: '400px' }}
            src="/assets/images/books.png"
            alt="HoloSchool"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;
