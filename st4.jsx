import { Link, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const handleLogin = (e) => {

    e.preventDefault();

    navigate("/dashboard");

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>CareerHub</h1>

        <p className="subtitle">
          Student Placement Portal
        </p>

        <h2>Login</h2>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="auth-link">

          Don't have an account?

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Login;
