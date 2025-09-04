import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import PrivateRoute from "./PrivateRoute";

import NewsList from "./NewsList";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
function App() {
  return (
    <AuthProvider>
      <Router>
        <nav style={{ padding: "10px", background: "#111" }}>
          <Link to="/" style={{ margin: "10px", color: "white" }}>News</Link>
          <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
          <Link to="/signup" style={{ margin: "10px", color: "white" }}>Signup</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <NewsList />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
