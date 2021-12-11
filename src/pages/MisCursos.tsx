import { Curso } from 'common/types';
import CardCourse from 'components/Card/CardCourse';
import Wrapper from 'containers/Wrapper';
import React, { PropsWithRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MisCursos = (props: PropsWithRef<any>) => {
  const [cursos, setCursos] = useState([]);
  // carga de lista de cursos
  useEffect(() => {
    (async () => {
      // Consumir API
      const response = await fetch('http://localhost:8000/api/courses');
      //const response = await fetch('#');
      const data = await response.json();
      setCursos(data);
    })();
  }, []);
  return (
    <Wrapper>
      <div className="album py-5 bg-light">
        <div className="container">
          <div>
            <h1 className="text-center">Mis Cursos</h1>
          </div>
          <div className="row">
            {cursos.map((C: Curso) => {
              return (
                <CardCourse
                  id={C.id}
                  image={C.picture}
                  description={C.description}
                >
                  {C.nombre}
                </CardCourse>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default MisCursos;
