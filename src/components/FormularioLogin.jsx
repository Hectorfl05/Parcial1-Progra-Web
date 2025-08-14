import { useState } from "react";

function FormularioLogin(){

  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleChangeUsuario = (e) => setUsuario(e.target.value);
  const handleChangeContraseña = (e) => setContraseña(e.target.value);
  const handleChangeCodigo = (e) => setCodigo(e.target.value);

  const enableButton = usuario && contraseña && codigo;

  return (
    <div className="div-container">
    <form className="form-container">
      <input
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={handleChangeUsuario}
        className="login-input" // Added class name
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={contraseña}
        onChange={handleChangeContraseña}
        className="login-input" // Added class name
      />
      <input
        type="number"
        placeholder="Código"
        value={codigo}
        onChange={handleChangeCodigo}
        className="login-input" // Added class name
      />
      <button disabled={!enableButton}>Iniciar sesión</button>
    </form>
    </div>
  );
}

export default FormularioLogin;
