import { Link, useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const handleRegister = (e) => {

    e.preventDefault();

    alert("Registration successful!");

    navigate("/");

  };

  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>CareerHub</h1>

        <p className="subtitle">
          Create Student Account
        </p>

        <form onSubmit={handleRegister}>

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            placeholder="College Name"
            required
          />

          <input
            type="password"
            placeholder="Password"
            required
          />

          <button type="submit">
            Create Account
          </button>

        </form>

        <p className="auth-link">

          Already have an account?

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;
