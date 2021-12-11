import React, { PropsWithChildren } from 'react';

const Wrapper = (props: PropsWithChildren<any>) => {
  return (
    <div>
      <div className="row  p-0">
        <main role="main" className="col-md-12 ml-sm-12 col-lg-12 px-md-4">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
