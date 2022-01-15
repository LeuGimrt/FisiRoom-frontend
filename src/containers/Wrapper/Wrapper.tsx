import { PropsWithChildren, useContext } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { ThemeContext } from 'context/ThemeContext';

const Wrapper = (props: PropsWithChildren<any>) => {
  const { themeColor, fontSize } = useContext(ThemeContext);

  const style = {
    fontSize: `${fontSize}px`,
  };
  console.log(fontSize);

  return (
    <>
      <div style={style} className={`theme-${themeColor}`}>
        <Navbar />
      </div>
      <div style={style} className={`theme-${themeColor}`} id="content">
        <div className="container-fluid">
          <div>
            <div className="row p-0">
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
      <div style={style} className={`theme-${themeColor}`}>
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
