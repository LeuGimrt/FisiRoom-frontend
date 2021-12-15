import React, { PropsWithChildren } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';

const Wrapper = (props: PropsWithChildren<any>) => {
  return (
    <>
      <Navbar />
      <div id="content">
        <div className="container-fluid">
          <div>
            <div className="row  p-0">
              <main
                role="main"
                className="col-md-12 ml-sm-12 col-lg-12 px-md-4"
              >
                {props.children}
              </main>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wrapper;
