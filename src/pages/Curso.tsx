import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { initialCourseData } from 'common/constants';
import { Curso as CursoType } from 'common/types';
import Menu from 'components/Menu/Menu';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import { CourseContext } from 'context/CourseContext';
import { UserContext } from 'context/UserContext';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

const alumnosOptions = [
  { label: 'Información', route: `detalles` },
  { label: 'Temas', route: `temas` },
  { label: 'Tareas', route: `gestionar-tareas` },
];
const profesorOptions = [
  { label: 'Información', route: `detalles` },
  //{ label: 'Temas', route: `temas` },
  { label: 'Gestionar Tareas', route: 'gestionar-tareas' },
  { label: 'Gestionar Alumnos', route: 'gestionar-alumnos' },
  //{ label: 'Gestionar Notas', route: 'gestionar-notas' },
];

const Curso = () => {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState<CursoType>(initialCourseData);
  const { setCourse } = useContext(CourseContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    getCourseDetails(cursoId ? cursoId : '').then((response: AxiosResponse) => {
      setCurso(response.data);
      setCourse(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <CourseDashboard course={curso}>
      <div className="row border-top border-primary pt-2">
        <div className="col-12 col-sm-2 col-md-3">
          <Menu
            options={
              user.id === parseInt(curso.owner)
                ? profesorOptions
                : alumnosOptions
            }
            path={`/curso/${cursoId}`}
          />
        </div>
        <div className="col-12 col-sm-10 col-md-9">
          <Outlet />
        </div>
      </div>
    </CourseDashboard>
  );
};
export default Curso;
