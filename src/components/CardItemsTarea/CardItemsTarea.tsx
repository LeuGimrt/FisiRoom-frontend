import { Assignment } from 'common/types';
import './CardItemsTarea.scss';
const CardItemsTarea = ({ tareas }: { tareas: Assignment[] }) => {
  return (
    <>
      {tareas.map((tarea) => {
        return (
          <div className="row border p-3 carditem my-2">
            {/* <div className="col-12 col-md-3 px-0 bg-light text-black"></div> */}
            <div className="col-12 col-md-4 px-3">
              <h5>{tarea.title}</h5>
              <p>{tarea.description}</p>
            </div>
            <div className="col-12 col-md-4 p-2 bg-light text-black">
              <h6>Fecha de entrega:</h6>
              <p> Inserte fecha</p>
            </div>
            <div className="col-12 col-xs-12 col-md-3 offset-md-1 list-group justify-content-center px-3 btnlistgroup">
              <button
                className="col-xs-4 col-md-12 list-group-item list-group-item-action btnitem text-center p-1 m-1 btn btn-primary active "
                type="button"
              >
                Evaluar
              </button>
              <button
                className="col-xs-4 col-md-12 list-group-item list-group-item-action btnitem text-center p-1 m-1 btn btn-primary active "
                type="button"
              >
                Editar
              </button>
              <button
                className="col-xs-4 col-md-12 list-group-item list-group-item-action btnitem text-center p-1 m-1 btn btn-primary active "
                type="button"
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CardItemsTarea;
