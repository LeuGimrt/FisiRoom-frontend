import Button from 'components/Button/Button';

const SeleccionFuente = () => {
  return (
    <>
      <h4>
        Escoja el tamaño de la fuente de su preferencia y de click en "Guardar"
      </h4>
      <form noValidate>
        <div className="row justify-content-center text-center">
          <div className="col-3 m-5">
            <p>Aa</p>
            <div className="form-group align-center ">
              <input type="number" id="typeNumber" className="form-control" />
              <label className="form-label " htmlFor="typeNumber">
                Tamaño de la fuente
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-flex justify-content-center">
            <Button
              color="warning"
              size="lg"
              type="button"
              className="px-auto"
              elevated
            >
              Revertir
            </Button>
          </div>
          <div className="col-6 d-flex justify-content-center">
            <Button
              color="primary"
              size="lg"
              type="submit"
              className="px-auto"
              elevated
            >
              Guardar
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SeleccionFuente;
