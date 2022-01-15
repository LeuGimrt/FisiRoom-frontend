import { Assignment } from 'common/types';
import Button from 'components/Button/Button';

import { Link, useParams } from 'react-router-dom';

import './CardItemsTarea.scss';

import { formatDate } from 'common/utils/formatDate';

const CardItemsTarea = ({ tareas }: { tareas: Assignment[] }) => {
  const { cursoId } = useParams();

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
              <p>{formatDate(tarea.due_datetime)}</p>
            </div>
            {}
            <div className="col-12 col-xs-12 col-md-3 offset-md-1 list-group justify-content-center px-3 btnlistgroup">
              <Link
                to={`/curso/${cursoId}/gestionar-tareas/${tarea.id}/detalles`}
              >
                <Button className="mx-1" color="primary" elevated>
                  Ir a la Tarea
                </Button>
              </Link>
              {/* <button
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
              </button> */}
            </div>
          </div>
        );
      })}
    </>
  );
};
export default CardItemsTarea;
