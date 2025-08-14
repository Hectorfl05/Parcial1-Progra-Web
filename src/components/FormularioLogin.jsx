import { useState } from "react";

function FormularioLogin({ onLogin = () => {} }) {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleChangeUsuario = (e) => setUsuario(e.target.value);
  const handleChangeContraseña = (e) => setContraseña(e.target.value);
  const handleChangeCodigo = (e) => setCodigo(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (usuario && contraseña && codigo) {
      onLogin({ usuario, contraseña, codigo });
      // Limpiar campos después del login
      setUsuario('');
      setContraseña('');
      setCodigo('');
    }
  };

  const enableButton = usuario && contraseña && codigo;

  return (
    <div className="div-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={handleChangeUsuario}
          className="login-input" 
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={handleChangeContraseña}
          className="login-input" 
        />
        <input
          type="number"
          placeholder="Codigo"
          value={codigo}
          onChange={handleChangeCodigo}
          className="login-input" 
        />
        <button type="submit" disabled={!enableButton}>
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default FormularioLogin;