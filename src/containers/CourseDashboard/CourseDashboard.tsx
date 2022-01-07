import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';
import { PropsWithChildren } from 'react';

type Props = {
  children: React.ReactNode;
  title: string;
  teacher: string;
};

const CourseDashboard = ({ children, title, teacher }: Props) => {
  return (
    <Wrapper>
      <div className="container">
        <div className=" headercourse row pt-5 pb-3 px-4">
          <Header>{title}</Header>
          <div className="col-12 pt-3">
            <h4>{teacher}</h4>
          </div>
        </div>
        <main role="main">{children}</main>
        <br />
      </div>
    </Wrapper>
  );
};
export default CourseDashboard;
