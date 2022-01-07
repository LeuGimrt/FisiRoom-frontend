import { getCourseDetails } from 'api/getCourseDetails';
import { AxiosResponse } from 'axios';
import { initialCourseData } from 'common/constants';
import { Curso as CursoType } from 'common/types';
import GroupListCustomCursos from 'components/GroupList-Custom-Cursos/GroupList-custom.cursos';
import CourseDashboard from 'containers/CourseDashboard/CourseDashboard';
import { CourseContext } from 'context/CourseContext';
import { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

const Curso = () => {
  const { cursoId } = useParams();
  const [curso, setCurso] = useState<CursoType>(initialCourseData);
  const { setCourse } = useContext(CourseContext);
  useEffect(() => {
    getCourseDetails(cursoId ? cursoId : '').then((response: AxiosResponse) => {
      setCurso(response.data);
      setCourse(response.data);
      console.log(response);
    });
  }, [cursoId]);
  return (
    <CourseDashboard title={curso.title} teacher={curso.owner_name}>
      <div className="row border-top border-primary pt-2">
        <Outlet />
      </div>
    </CourseDashboard>
  );
};
export default Curso;
