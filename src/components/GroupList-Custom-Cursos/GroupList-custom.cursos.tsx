import { ButtonItem } from 'common/types';
import GroupList from 'components/GroupList/GroupList';

type Props = {
  activeBtn: string;
};

const GroupListCustomCursos = ({ activeBtn }: Props) => {
  let alumnosbtns: ButtonItem[] = [
    { label: 'Información', route: `detalles` },
    { label: 'Temas', route: `temas` },
    { label: 'Tareas', route: `tareas` },
  ];
  let profesorbtns: ButtonItem[] = [
    { label: 'Gestionar Tareas', route: 'a' },
    { label: 'Gestionar Alumnos', route: 'a' },
    { label: 'Gestionar Notas', route: 'a' },
  ];
  return (
    <div className="col-3 border border-light ">
      <div className="col-12 pt-3">
        <p>Opciones del Alumno: </p>
      </div>
      <GroupList btnlist={alumnosbtns} activeBtn={activeBtn} />
      <div className="col-12 pt-3">
        <p>Opciones del Profesor: </p>
      </div>
      <GroupList btnlist={profesorbtns} activeBtn={activeBtn} />
    </div>
  );
};
export default GroupListCustomCursos;
