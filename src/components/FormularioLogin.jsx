import { useState } from "react";

function FormularioLogin({ onLogin = () => {} }) {
  const [formData, setFormData] = useState({
    usuario: '',
    contraseña: '',
    codigo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.usuario && formData.contraseña && formData.codigo) {
      onLogin({ ...formData });
      setFormData({ usuario: '', contraseña: '', codigo: '' });
    }
  };

  const enableButton = formData.usuario && formData.contraseña && formData.codigo;

  return (
    <div className="div-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          type="text"
          name="usuario"
          placeholder="Usuario"
          value={formData.usuario}
          onChange={handleChange}
          className="login-input" 
        />
        <input
          type="password"
          name="contraseña"
          placeholder="Contraseña"
          value={formData.contraseña}
          onChange={handleChange}
          className="login-input" 
        />
        <input
          type="number"
          name="codigo"
          placeholder="Codigo"
          value={formData.codigo}
          onChange={handleChange}
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