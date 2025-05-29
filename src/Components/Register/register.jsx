import React from "react";
import './register-style.css'

function Register() {
  return (
    <>
      <a href="/" className="form-label fw-bold modal-content boton-regresar">
        <img src="" alt="Volver" /> {/*falta añadir svg de volver*/}
      </a>
      <div className="container mt-5 registro-container">
        <h1 className="text-start fs-2 fw-bold registro-titulo">Registro</h1>;
        <div className="row justify-content-center">
          <p className="text-start fs-6 registro-descripcion">
            <span className="fw-bold">Regístrate</span> ingresando los siguientes datos
          </p>
        </div>
        <form>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label fw-bold">Nombre</label>
            <input
              type="text"
              className="form-control border border-secondary border-2"
              id="nombre"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">Email</label>
            <input
              type="email"
              className="form-control border border-secondary border-2"
              id="email"
              placeholder="ejemplo@correo.com"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="edad" className="form-label fw-bold">Edad</label>
            <input
              type="number"
              className="form-control border border-secondary border-2"
              id="edad"
              placeholder="Ingresa tu edad"
              required
            />
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="password" className="form-label fw-bold">Contraseña</label>
            <input
              type="password"
              className="form-control auto-input border border-secondary border-2 imput-password"
              id="password"
              placeholder="Contraseña"
              required
            />
            <span className="input-eye">
              <img src="" id="icon-password" alt="Ver contraseña" /> {/*falta añadir svg de ojo*/}
            </span>
          </div>
          <div className="mb-3 position-relative">
            <label htmlFor="confirmPassword" className="form-label fw-bold">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control auto-input border border-secondary border-2 imput-password"
              id="confirmPassword"
              placeholder="Confirmar contraseña"
              required
            />
            <span className="input-eye">
              <img src="" alt="icono ojo cerrado" id="icon-confirmPassword" />  {/*falta añadir svg de ojo*/}
            </span>
          </div>
          <div className="form-text text-danger d-none" id="passwordError">
            Las contraseñas no coinciden.
          </div>
          <div className="botones-registro">
            <a href="/" className="btn boton-volver">Volver</a>
            <button type="submit" className="btn boton-registrar">Registrar</button>
          </div>
          <div id="registroExitoso" className="alert alert-success d-none" role="alert">
            ¡Se registró correctamente!
          </div>
          <div className="text-center mt-3">
            <span>
              ¿Ya tienes una cuenta?
              <a href="/login" className="boton-iniciar-sesion">Inicia sesión</a>
            </span>
          </div>
        </form>
      </div>
     
    </>
  );
}

export default Register;