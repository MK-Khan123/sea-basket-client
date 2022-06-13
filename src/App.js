import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="/home" element={<Home />} />

          <Route path="/login" element={<Login />} />

          {/* <Route path="/about-testo" element={<AboutTesto />} /> */}

          <Route path='*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
