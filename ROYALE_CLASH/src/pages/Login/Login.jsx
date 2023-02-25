import './Login.css';

import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const { pass, setPass } = useContext(UserContext);
  const inputRef = useRef(null);
  const passRef = useRef(null);
  const navigate = useNavigate();
  return (
    <main>
      <div className="container">
        <div className="box">
          <div className="form">
            <h2>LOGIN</h2>
            <div className="inputBox">
              <input type="text" ref={inputRef} required="required" />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" ref={passRef} required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <button
              onClick={() => {
                if (inputRef.current.value !== '' && passRef.current.value !== '') {
                  setUser(inputRef.current.value);
                  setPass(passRef.current.value);
                  localStorage.setItem('user', inputRef.current.value);
                  localStorage.setItem('pass', passRef.current.value);
                  navigate('/');
                } else {
                  return alert('Introduce Usuario y Contraseña por favor !!');
                }
              }}
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
