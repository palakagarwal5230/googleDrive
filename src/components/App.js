import React from "react";
import Signup from "./authentication/Signup";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import Login from "./authentication/Login";
import ForgotPassword from "./authentication/ForgotPassword";
import UpdateProfile from "./authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";
// import PrivateRoute from "./authentication/PrivateRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Drive  */}
          <Route exact path="/" Component={Dashboard} />
          <Route exact path="/folder/:folderId" Component={Dashboard} />


          {/* Profile */}
          <Route exact path="/user" Component={Profile} />
          <Route path="/update-profile" Component={UpdateProfile} />

          {/* Auth  */}
          <Route path="/signup" Component={Signup} />
          <Route path="/login" Component={Login} />
          <Route path="forgot-password" Component={ForgotPassword} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
