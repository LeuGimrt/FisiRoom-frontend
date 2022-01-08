import { ButtonItem } from 'common/types';
import GroupList from 'components/GroupList/GroupList';
import { UserContext } from 'context/UserContext';
import { useContext } from 'react';

type Props = {
  activeBtn: string;
  ownerId: number;
};

const GroupListCustomCursos = ({ activeBtn, ownerId }: Props) => {
  const { user } = useContext(UserContext);

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
      {(user.id = ownerId) && (
        <>
          <div className="col-12 pt-3">
            <p>Opciones del Profesor: </p>
          </div>
          <GroupList btnlist={profesorbtns} activeBtn={activeBtn} />
        </>
      )}
    </div>
  );
};
export default GroupListCustomCursos;
