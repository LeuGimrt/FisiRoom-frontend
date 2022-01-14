import { ButtonItem } from 'common/types';
import GroupList from 'components/GroupList/GroupList';
import { UserContext } from 'context/UserContext';
import { useContext, useEffect } from 'react';

type Props = {
  ownerId: number;
};

const GroupListCustomCursos = ({ ownerId }: Props) => {
  const { user } = useContext(UserContext);

  let alumnosbtns: ButtonItem[] = [
    { label: 'Información', route: `detalles` },
    { label: 'Temas', route: `temas` },
    { label: 'Tareas', route: `gestionar-tareas` },
  ];
  let profesorbtns: ButtonItem[] = [
    { label: 'Información', route: `detalles` },
    { label: 'Temas', route: `temas` },
    { label: 'Gestionar Tareas', route: 'gestionar-tareas' },
    { label: 'Gestionar Alumnos', route: 'gestionar-alumnos' },
    { label: 'Gestionar Notas', route: 'gestionar-notas' },
  ];

  useEffect(() => {
    console.log('owner', ownerId);
    console.log('user', user.id);
  }, []);
  return (
    <div className=" d-none d-md-block col-md-3 col-3 border border-light ">
      {/* Opciones del docente */}
      {user.id === ownerId && (
        <>
          <GroupList btnlist={profesorbtns} />
        </>
      )}
      {/* Opciones del alumno */}
      {user.id !== ownerId && (
        <>
          <GroupList btnlist={alumnosbtns} />
        </>
      )}
    </div>
  );
};
export default GroupListCustomCursos;
