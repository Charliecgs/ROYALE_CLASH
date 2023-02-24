import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

//1º CREAR CONTEXTO
export const UserContext = createContext();

//2º CREAR PROVEEDOR CON LA INFORMACION DENTRO
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [clash, setClash] = useState([]);
  const [user, setUser] = useState(() => {
    if (localStorage.getItem('user')) {
      return localStorage.getItem('user');
    } else {
      return null;
    }
  });
  const [pass, setPass] = useState(() => {
    if (localStorage.getItem('pass')) {
      return localStorage.getItem('pass');
    } else {
      return null;
    }
  });

  const logout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    setUser(null);
    setPass(null);
    navigate('/');
  };

  //3º RETORNAR LA ETIQUETA WRAPEADORA CON LOS VALUE A COMPARTIR EN LA APLICACION
  return (
    <UserContext.Provider
      value={{ user, setUser, logout, pass, setPass, clash, setClash }}
    >
      {children}
    </UserContext.Provider>
  );
};
