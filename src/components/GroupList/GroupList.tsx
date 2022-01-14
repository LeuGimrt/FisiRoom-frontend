import { ButtonItem } from 'common/types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { useState } from 'react';
type Props = {
  btnlist: ButtonItem[];
};

const GroupList = ({ btnlist }: Props) => {
  const { cursoId } = useParams();
  const [selectedBtn, setSelectedBtn] = useState('detalles');
  const giveClassName = (btn: string) => {
    const baseClass = 'col-12 py-3 list-group-item list-group-item-action';
    if (btn === selectedBtn) return `${baseClass} active bg-primary`;
    return baseClass;
  };
  return (
    <div className="col-12 list-group">
      {btnlist.map((btnitem: ButtonItem) => {
        return (
          <Link
            onClick={() => {
              setSelectedBtn(btnitem.route);
            }}
            className={giveClassName(btnitem.route)}
            to={`/curso/${cursoId}/${btnitem.route}`}
          >
            {btnitem.label}
          </Link>
        );
      })}
    </div>
  );
};
export default GroupList;
