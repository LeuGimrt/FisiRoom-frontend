import { getCourseAssignments } from 'api/getCourseAssignments';
import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { Assignment, Curso, UserData } from 'common/types';
import TareaDetalles from 'components/TareaDetalles/TareaDetalles';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RespuestaTarea = () => {
  const { cursoId } = useParams();
  const { tareaId } = useParams();
  const [tarea, setTarea] = useState<Assignment>({
    id: 0,
    course: 0,
    title: '',
    description: '',
    creation_timestamp: '',
    file: undefined,
    due_datetime: '',
  });
  const [owner, setOwner] = useState('');
  const [alumnos, setAlumnos] = useState<UserData[]>([]);

  useEffect(() => {
    getCourseAssignments(cursoId ? cursoId : '').then(
      (response: AxiosResponse) => {
        setTarea(response.data);
        console.log(response.data);
      }
    );
    getCourseDetails(cursoId ? cursoId : '').then(
      (response: AxiosResponse<Curso>) => {
        setOwner(response.data.owner);
        console.log(response.data.enrolled);
        setAlumnos(response.data.enrolled as UserData[]);
      }
    );
  }, []);
  console.log(alumnos);
  return (
    <>
      <TareaDetalles
        tareaId={tareaId ? tareaId : ''}
        cursoId={cursoId ? cursoId : ''}
        ownerId={owner}
        alumnosList={alumnos}
      />
    </>
  );
};
export default RespuestaTarea;
