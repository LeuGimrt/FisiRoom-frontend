import Header from 'components/Header/Header';
import { PropsWithChildren } from 'react';
import Wrapper from 'containers/Wrapper/Wrapper';
const CourseDashboard = (props: PropsWithChildren<any>) => {
  return (
    <Wrapper>
      <div className="container">
        <div className=" headercourse row pt-5 pb-3 px-4">
          <Header>COURSE NAME</Header>
          <div className="col-12 pt-3">
            <h4>Teacher Name</h4>
          </div>
        </div>
        <main role="main">{props.children}</main>
        <br />
      </div>
    </Wrapper>
  );
};
export default CourseDashboard;
