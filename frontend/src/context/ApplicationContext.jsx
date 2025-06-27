


'use client';
import { createContext, useContext, useState } from 'react';

const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  const applyToJob = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  return (
    <ApplicationContext.Provider value={{ appliedJobs, applyToJob }}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplication = () => useContext(ApplicationContext);