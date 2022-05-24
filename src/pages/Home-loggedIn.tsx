import Cardbutton from 'components/Cards/CardButton/CardButton';
import Cardbutton2 from 'components/Cards/CardButton2/CardButton2';
import CardPosts from 'components/Cards/CardPosts/CardPosts';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';

const Home2 = () => {
  return (
    <Wrapper>
      <br />
      <Header centered>Bienvenido a HoloSchool</Header>
      <br />
      {/* quitar d-none */}
      <div className=" row p-1 ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 pr-2 pl-2  py-1   justify-content-center">
          <Cardbutton
            title={'Mis cursos inscritos'}
            description={
              'Aquí puede visualizar sus cursos en los que ha sido invitado a participar'
            }
            height={'30rem'}
            ruta={'/cursos'}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 pr-2 pl-2  py-1   justify-content-center">
          <Cardbutton2
            title={'Mis cursos Creados'}
            description={'Aquí puede visualizar sus cursos que ha creado'}
            background={'/assets/images/ilonka.jpg'}
            height={'30rem'}
            ruta={'/cursos-creados'}
          />
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-6 col-xxl-6 pr-2 pl-2  py-1   justify-content-center">
          <div className="col-12 pt-1 p-0 justify-content-center ">
            <Cardbutton
              title={'Mi perfil'}
              description={'Aquí puede visualizar los detalles de su perfil'}
              background={'/assets/images/ilonka.jpg'}
              height={'14rem'}
            />
          </div>
          <div className="col-12 pt-1 p-0  justify-content-center ">
            <Cardbutton2
              title={'Modo Daltónicos'}
              description={
                '¿Tiene algun problema de visión?, pruebe activar este modo'
              }
              background={'/assets/images/ilonka.jpg'}
              height={'15rem'}
              textheight={'5rem'}
              ruta={'/configuracion'}
            />
          </div>
        </div>
      </div>
      {/* nueva seccion */}
      <div className="row ">
        <div className="col-12">
          <CardPosts />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <CardPosts />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
          <CardPosts />
        </div>
      </div>
      <div className=" row p-1"></div>
    </Wrapper>
  );
};
export default Home2;
