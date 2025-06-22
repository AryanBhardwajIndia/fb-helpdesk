import "./styles/RegisterPage.css";

export default function RegisterPage() {
  return (
    <div className="register-container">
      <center><h1>Create Account</h1></center>
      <form className="register-form">
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" className="button">Register</button>
      </form>
    </div>
  );
}
