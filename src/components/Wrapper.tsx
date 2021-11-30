import React, {PropsWithChildren} from 'react';
// import NavbarB from './Navbar/NavbarB';
import Navbar from './Navbar/Navbar';


const Wrapper = (props: PropsWithChildren<any>) => {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid">
                <div className="row  p-0">
                    <main role="main" className="col-md-12 ml-sm-12 col-lg-12 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Wrapper;
