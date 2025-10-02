// src/Example.jsx

import fishy from '../../Assets/boat.png';

const SigninForm = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <img
          alt="Fishy"
          src={fishy}
          className="auth-logo"
        />
        <h2 className="auth-title">Sign in to your account</h2>
      </div>

      <form action="#" method="POST" className="auth-form">
        <div>
          <label htmlFor="email" className="auth-label">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="auth-input"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="auth-label">Password</label>
            <a href="#" className="auth-forgot">Forgot password?</a>
          </div>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="auth-input"
          />
        </div>

        <button type="submit" className="auth-button">Sign in</button>
      </form>


    </div>
  )
}

export default SigninForm;
