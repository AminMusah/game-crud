import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
import MiniLoader from "./MiniLoader";

function Login() {
  let { auth,setAuth } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    localStorage.setItem('user',email);
    setAuth(true)
    setTimeout(()=>{
    navigate('/')
    },2000)
  };
  return (
    <div>
      <Header />
      <section className="create-game">
        <div className="container">
          <div className="create-game-card">
            <h2 className="h2 create-game-title">Login</h2>

            <form
              action=""
              className="create-game-form"
              onSubmit={handleSubmit}
            >
              <div>
                <input
                  type="email"
                  id=""
                  name="name"
                  value={email}
                  placeholder="email"
                  className="input-field"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  className="input-field"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <div>
                  {loading ? <MiniLoader /> : ""}
                  Login
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
