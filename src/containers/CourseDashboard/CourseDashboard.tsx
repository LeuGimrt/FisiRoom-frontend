import { Curso } from 'common/types';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';

type Props = {
  children: React.ReactNode;
  course: Curso;
};

const CourseDashboard = ({ children, course }: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className=" headercourse row pt-5 pb-3 px-4">
          <Header>{course.title}</Header>
          <div className="col-12 pt-3">
            <h6>Docente: {course.owner_name}</h6>
          </div>
        </div>
        <main role="main">{children}</main>
        <br />
      </div>
    </Wrapper>
  );
};
export default CourseDashboard;
