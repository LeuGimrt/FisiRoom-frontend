import { ButtonItem } from 'common/types';
import GroupList from 'components/GroupList/GroupList';
import './CardItemsTema.scss';
const CardItemsTema = () => {
  let btns: ButtonItem[] = [
    { label: '1', route: `detalles` },
    { label: '2', route: `temas` },
    { label: '3', route: `tareas` },
  ];
  return (
    <div className="row border p-3 carditem my-2">
      <div className="col-3 px-0 bg-light text-black"></div>
      <div className="col-6 px-3">
        <h5>Descripción: </h5>
        <p>descripción del Material puesto por el creador del curso</p>
      </div>
      <div className="col-3 list-group justify-content-center px-3 btnlistgroup">
        <a
          className="col-12 list-group-item list-group-item-action btnitem text-center p-1 m-1 btn btn-primary active "
          type="button"
        >
          Ver
        </a>
      </div>
    </div>
  );
};
export default CardItemsTema;
