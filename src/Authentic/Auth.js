import React, { useEffect, useState } from "react";
import firebaseConfig from "../firebase.js";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
