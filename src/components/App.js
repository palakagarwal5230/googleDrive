import React from "react";
import Signup from "./Signup";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
// import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    
    <Container className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/signup" Component={Signup} />
              <Route path="/update-profile" Component={UpdateProfile} />
              <Route path="/login" Component={Login} />
              <Route exact path="/" Component={Dashboard}/>
              <Route path="forgot-password" Component={ForgotPassword} />
            </Routes>
          </AuthProvider>
        </Router>
        {/* <Signup/> */}
      </div>

      
    </Container>
    
  ) 
  
}

export default App;
