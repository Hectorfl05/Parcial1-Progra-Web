import FormularioLogin from '../components/FormularioLogin';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';


test('El boton login debe estar deshabilitado ', () => {
  render(<FormularioLogin />)
  const botonlogin = screen.getByRole('button', {name: /Iniciar\s*sesi[óo]n/i});
  expect(botonlogin).toBeDisabled();
});

test('El boton login debe estar habilitado al tener los tres campos llenos', async () => {
  render(<FormularioLogin />);
  const user = screen.getByPlaceholderText(/usuario/i);
  const password = screen.getByPlaceholderText(/contraseña/i);
  const codigo = screen.getByPlaceholderText(/codigo/i);
  const botonlogin = screen.getByRole('button', {name: /Iniciar\s*sesi[óo]n/i});

  await userEvent.type(user, 'usuarioTest');
  await userEvent.type(password, 'contraseñaTest');
  await userEvent.type(codigo, '123456');

  expect(botonlogin).toBeEnabled();

})


test('Debe limpiar los campos después del login', async () => {
  const mockLogin = jest.fn();
  
  render(<FormularioLogin onLogin={mockLogin} />);
  
  // Obtener los elementos del formulario
  const userInput = screen.getByPlaceholderText(/usuario/i);
  const passwordInput = screen.getByPlaceholderText(/contraseña/i);
  const codigoInput = screen.getByPlaceholderText(/codigo/i);
  const botonLogin = screen.getByRole('button', { name: /Iniciar\s*sesi[óo]n/i });

  // Llenar los campos
  await userEvent.type(userInput, 'testUser');
  await userEvent.type(passwordInput, 'testPass123');
  await userEvent.type(codigoInput, '987654');

  // Hacer submit
  await userEvent.click(botonLogin);

  // Verificar que los campos están vacíos después del submit
  expect(userInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
  expect(codigoInput).toHaveValue('');
});