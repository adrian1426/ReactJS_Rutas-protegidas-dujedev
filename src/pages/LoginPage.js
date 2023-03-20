import { useNavigate } from "react-router-dom";


const LoginPage = (props) => {
  const { handleLogin } = props;
  const navigate = useNavigate();

  const _handleLogin = () => {
    handleLogin();
    navigate('/products');
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={_handleLogin}>Ingresar</button>
    </div>
  );
};

export default LoginPage;