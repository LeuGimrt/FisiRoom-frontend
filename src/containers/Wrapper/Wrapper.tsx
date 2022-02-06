import { PropsWithChildren, useContext } from 'react';
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/Footer';
import { ThemeContext } from 'context/ThemeContext';

const Wrapper = (props: PropsWithChildren<any>) => {
  const { themeColor, fontSize, cursorSize } = useContext(ThemeContext);

  const style = {
    fontSize: `${fontSize}px`,
  };
  console.log(fontSize);

  return (
    <>
      <div
        style={style}
        className={`theme-${themeColor} cursor-size-${cursorSize}`}
      >
        <Navbar />
      </div>
      <div
        style={style}
        className={`theme-${themeColor} cursor-size-${cursorSize}`}
        id="content"
      >
        <div className="container-fluid">
          <div className="h-100">
            <div className="row p-0 h-100">
              <main
                role="main"
                style={{
                  background: 'rgb(255 255 255 / 100%)',
                }}
                className="col-md-12 ml-sm-12 col-lg-12 px-md-4"
              >
                {props.children}
              </main>
            </div>
          </div>
        </div>
      </div>
      <div
        style={style}
        className={`theme-${themeColor} cursor-size-${cursorSize}`}
      >
        <Footer />
      </div>
    </>
  );
};

export default Wrapper;
