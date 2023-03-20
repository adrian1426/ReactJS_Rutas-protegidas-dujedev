const LoginPage = (props) => {
  const { handleLogin } = props;

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default LoginPage;