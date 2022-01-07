import { ButtonItem } from 'common/types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
type Props = {
  btnlist: ButtonItem[];
  activeBtn?: string;
};

const GroupList = ({ btnlist, activeBtn }: Props) => {
  const { cursoId } = useParams();
  console.log('btnlist');
  console.log(btnlist);
  console.log('activeBtn');
  console.log(activeBtn);
  const activarBoton = (btn: ButtonItem) => {
    if (activeBtn === btn.label) {
      return 'col-12 py-3 list-group-item list-group-item-action active';
    } else {
      return 'col-12 py-3 list-group-item list-group-item-action ';
    }
  };
  return (
    <div className="col-12 list-group">
      {btnlist.map((btnitem: ButtonItem) => {
        let classname = activarBoton(btnitem);
        return (
          <Link className={classname} to={`/curso/${cursoId}/${btnitem.route}`}>
            {btnitem.label}
          </Link>
        );
      })}
    </div>
  );
};
export default GroupList;
