import { initialCourseData } from 'common/constants';
import { Curso } from 'common/types';
import React, { createContext, useState } from 'react';

export type CourseType = {
  course: Curso;
  setCourse: React.Dispatch<React.SetStateAction<Curso>>;
};

export const CourseContext = createContext<CourseType>({
  course: initialCourseData,
  setCourse: () => {},
});

const CourseProvider = ({ children }: { children: React.ReactNode }) => {
  const [course, setCourse] = useState<Curso>(initialCourseData);

  return (
    <CourseContext.Provider value={{ course, setCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseProvider;
