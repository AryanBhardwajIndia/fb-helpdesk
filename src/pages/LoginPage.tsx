import "./styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <center><h1>Login</h1></center>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="button">Login</button>
      </form>
    </div>
  );
}
