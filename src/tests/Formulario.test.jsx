import FormularioLogin from '../components/FormularioLogin';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('El botón login debe estar deshabilitado inicialmente', () => {
  render(<FormularioLogin />);
  const botonlogin = screen.getByRole('button', {name: /Iniciar\s*sesi[óo]n/i});
  expect(botonlogin).toBeDisabled();
});

test('El botón login debe estar habilitado al tener los tres campos llenos', async () => {
  render(<FormularioLogin />);
  const user = screen.getByPlaceholderText(/usuario/i);
  const password = screen.getByPlaceholderText(/contraseña/i);
  const codigo = screen.getByPlaceholderText(/codigo/i);
  const botonlogin = screen.getByRole('button', {name: /Iniciar\s*sesi[óo]n/i});

  await userEvent.type(user, 'usuarioTest');
  await userEvent.type(password, 'contraseñaTest');
  await userEvent.type(codigo, '123456');

  expect(botonlogin).toBeEnabled();
});

test('Debe llamar a onLogin y limpiar los campos al hacer submit', async () => {
  const mockLogin = jest.fn();
  render(<FormularioLogin onLogin={mockLogin} />);
  
  const userInput = screen.getByPlaceholderText(/usuario/i);
  const passwordInput = screen.getByPlaceholderText(/contraseña/i);
  const codigoInput = screen.getByPlaceholderText(/codigo/i);
  const botonLogin = screen.getByRole('button', { name: /Iniciar\s*sesi[óo]n/i });

  await userEvent.type(userInput, 'testUser');
  await userEvent.type(passwordInput, 'testPass123');
  await userEvent.type(codigoInput, '987654');
  await userEvent.click(botonLogin);

  expect(mockLogin).toHaveBeenCalledTimes(1);
  expect(mockLogin).toHaveBeenCalledWith({
    usuario: 'testUser',
    contraseña: 'testPass123',
    codigo: '987654'
  });
  expect(userInput).toHaveValue('');
  expect(passwordInput).toHaveValue('');
  expect(codigoInput).toHaveValue('');
});