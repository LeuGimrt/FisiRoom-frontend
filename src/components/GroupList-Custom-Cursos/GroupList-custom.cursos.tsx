import { ButtonItem } from 'common/types';
import GroupList from 'components/GroupList/GroupList';
import { UserContext } from 'context/UserContext';
import { useContext } from 'react';

type Props = {
  ownerId: number;
};

const GroupListCustomCursos = ({ ownerId }: Props) => {
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
    <div className=" d-none d-md-block col-md-3 col-3 border border-light ">
      <div className="col-12 pt-3">
        <p>Opciones del Alumno: </p>
      </div>
      <GroupList btnlist={alumnosbtns} />
      {(user.id = ownerId) && (
        <>
          <div className="col-12 pt-3">
            <p>Opciones del Profesor: </p>
          </div>
          <GroupList btnlist={profesorbtns} />
        </>
      )}
    </div>
  );
};
export default GroupListCustomCursos;
