import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ConnectPage from "./pages/ConnectPage";
import DisconnectPage from "./pages/DisconnectPage";
import "./index.css";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content-box">
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/disconnect" element={<DisconnectPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
