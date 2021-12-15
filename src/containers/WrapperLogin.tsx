import React from 'react';

const WrapperLogin = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row  p-0">
          <main role="main" className="col-md-12 ml-sm-12 col-lg-12 px-md-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default WrapperLogin;
