import Hero from "./components/Hero";
import Register from "./components/Register";
import Login from "./components/login";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoutes";
import PasswordResetRequest from "./components/PasswordResetRequest";
import PasswordReset from "./components/PasswordReset";
import Profile from "./components/Profile";
import Homepage from "./components/Homepage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/request/password_reset"
          element={<PasswordResetRequest />}
        />
        <Route path="/password-reset/:token" element={<PasswordReset />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/homepage" element={<Homepage />} />
          <Route path="/home/profile" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
