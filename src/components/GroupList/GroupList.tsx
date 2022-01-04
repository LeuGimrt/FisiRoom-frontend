import { ButtonItem } from 'common/types';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
type Props = {
  btnlist: ButtonItem[];
  activeBtn?: string;
};

const GroupList = ({ btnlist, activeBtn }: Props) => {
  const navigate = useNavigate();
  console.log('btnlist');
  console.log(btnlist);
  console.log('activeBtn');
  console.log(activeBtn);
  const activarBoton = (btn: ButtonItem) => {
    if (activeBtn == btn.label) {
      return 'col-12 py-3 list-group-item list-group-item-action active';
    } else {
      return 'col-12 py-3 list-group-item list-group-item-action ';
    }
  };
  function navegar(route: string) {
    return navigate(`/curso/${route}`);
  }
  return (
    <div className="col-12 list-group">
      {btnlist.map((btnitem: ButtonItem) => {
        let classname = activarBoton(btnitem);
        return (
          <a
            className={classname}
            type="button"
            onClick={() => {
              navegar(btnitem.route);
            }}
          >
            {btnitem.label}
          </a>
        );
      })}
    </div>
  );
};
export default GroupList;
