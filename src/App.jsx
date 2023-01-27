import Home from "./components/Home";
import Login from "./components/Login";
import { Routes, Route, Link } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  let { auth } = useContext(UserContext);

  return (
    <Routes>
      <Route path="/" element={ auth ? <Home /> : <Login/>} />
      <Route path="/login" element={ auth ? <Home /> : <Login/>} />
    </Routes>
  );
}

export default App;
