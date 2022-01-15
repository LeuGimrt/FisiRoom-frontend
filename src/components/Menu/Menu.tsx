import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  options: {
    label: string;
    route: string;
  }[];
  path: string;
};

const Menu = ({ options, path }: Props) => {
  const [selectedBtn, setSelectedBtn] = useState(`${path}/${options[0].route}`);

  const giveClassName = (btn: string) => {
    const baseClass = 'col-12 py-3 list-group-item list-group-item-action';
    if (btn === selectedBtn) return `${baseClass} active bg-primary`;
    return baseClass;
  };
  return (
    <div className="list-group">
      {options.map((opt) => {
        return (
          <Link
            onClick={() => {
              setSelectedBtn(`${path}/${opt.route}`);
            }}
            to={`${path}/${opt.route}`}
            className={giveClassName(`${path}/${opt.route}`)}
          >
            {opt.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
