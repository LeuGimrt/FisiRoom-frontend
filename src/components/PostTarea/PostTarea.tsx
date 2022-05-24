import Button from 'components/Buttons/Button/Button';

const PostTarea = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex border-bottom py-2">
        <h2>Titulo de la Tarea</h2>
      </div>
      <div className="border-bottom">
        <p>Agregar un comentario o respuesta escrita</p>
      </div>
      <div className="col-12  pb-4  ">
        <div>contenedor para subir archivo</div>
      </div>
      <div className="col-12">
        <Button
          type="button"
          className="mx-1 d-flex justify-content-center"
          color="primary"
          elevated
          onClick={() => {}}
        >
          Entregar
        </Button>
      </div>
    </div>
  );
};
export default PostTarea;
