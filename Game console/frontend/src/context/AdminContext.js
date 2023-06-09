import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  
  return (
    <AdminContext.Provider value={{ isAdminLoggedIn, setIsAdminLoggedIn }}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;