import Cardbutton from 'components/CardButton/CardButton';
import Cardbutton2 from 'components/CardButton2/CardButton2';
import Header from 'components/Header/Header';
import Wrapper from 'containers/Wrapper/Wrapper';

const Home2 = () => {
  return (
    <Wrapper>
      <br />
      <Header centered>Bienvenido a HoloSchool</Header>
      <br />
      <div className=" row p-1 ">
        <div className="col-12 col-sm-12 col-md-12 offset-xl-1 col-lg-4 col-xl-3 col-xxl-3 pl-4 pr-2 py-1 d-flex  justify-content-center">
          <Cardbutton
            title={'Mis cursos inscritos'}
            description={
              'Aquí puede visualizar sus cursos en los que ha sido invitado a participar'
            }
            height={'30rem'}
            ruta={'/cursos'}
          />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-3 col-xxl-3 pr-2 pl-2 d-flex py-1   justify-content-center">
          <Cardbutton2
            title={'Mis cursos Creados'}
            description={'Aquí puede visualizar sus cursos que ha creado'}
            background={'/assets/images/ilonka.jpg'}
            height={'30rem'}
            ruta={'/cursos-creados'}
          />
        </div>
        <div
          className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 px-4 py-1 d-flex  justify-content-center  "
          style={{ height: '30rem' }}
        >
          <div className="row">
            <div className="col-12 pb-1 p-0 ">
              <Cardbutton
                title={'Mi perfil'}
                description={'Aquí puede visualizar los detalles de su perfil'}
                background={'/assets/images/ilonka.jpg'}
                height={'14rem'}
              />
            </div>
            <div className="col-12 pt-1 p-0 d-flex  justify-content-center align-items-end">
              <Cardbutton2
                title={'Modo Daltónicos'}
                description={
                  '¿Tiene algun problema de visión?, pruebe activar este modo'
                }
                background={'/assets/images/ilonka.jpg'}
                height={'14rem'}
                ruta={'/configuracion'}
              />
            </div>
          </div>
        </div>

        <div className="col-6 CardButtom">b</div>
      </div>
    </Wrapper>
  );
};
export default Home2;
