import { Curso } from 'common/types';
import React, { createContext, useState } from 'react';

export type CourseType = {
  course: Curso;
  setCourse: React.Dispatch<React.SetStateAction<Curso>>;
};

const initialCourseData = {
  category: 1,
  day: '',
  day_of_the_week: '',
  description: '',
  id: 1,
  owner: '',
  owner_name: '',
  time_end: '',
  time_start: '',
  title: '',
  enrolled: [],
  posts: [],
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
