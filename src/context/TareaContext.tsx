import { initialCourseData, initialTareaData } from 'common/constants';
import React, { createContext, useState } from 'react';
import { Assignment } from '../common/types';

export type TareaType = {
  tarea: Assignment;
  setTarea: React.Dispatch<React.SetStateAction<Assignment>>;
};

export const TareaContext = createContext<TareaType>({
  tarea: initialTareaData,
  setTarea: () => {},
});

const TareaProvider = ({ children }: { children: React.ReactNode }) => {
  const [tarea, setTarea] = useState<Assignment>(initialTareaData);

  return (
    <TareaContext.Provider value={{ tarea, setTarea }}>
      {children}
    </TareaContext.Provider>
  );
};

export default TareaProvider;
