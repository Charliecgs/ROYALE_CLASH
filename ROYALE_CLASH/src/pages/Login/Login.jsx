import './Login.css';
import Swal from 'sweetalert2';
import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';

const Login = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

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
                  localStorage.setItem('user', user);
                  localStorage.setItem('pass', pass);
                  navigate('/');
                  Toast.fire({
                    icon: 'success',
                    title: '¡Logueado con éxito!',
                  });
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
