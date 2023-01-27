import { useEffect, useState, useContext } from "react";
import MenLineIcon from "remixicon-react/MenLineIcon";
import CloseLineIcon from "remixicon-react/CloseLineIcon";
import LoginBoxLineIcon from "remixicon-react/LoginBoxLineIcon";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 

function Header() {
  let { auth,setAuth} = useContext(UserContext);
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  const handleLogout = () => {
    localStorage.removeItem("user",auth);
    setAuth(false);    
    navigate('/login')
  };
  return (
    <div>
      <header className="header">
        <div className="overlay" data-overlay></div>

        <div className="container">
          <a href="#" className="logo">
            Game CRUD
          </a>

          <button className="nav-open-btn">
            <MenLineIcon />{" "}
          </button>

          <nav className="navbar">
            <div className="navbar-top">
              <a href="#" className="logo">
                {/* <img src="./assets/images/logo.svg" alt="GameX logo"> */}
              </a>

              <button className="nav-close-btn">
                <CloseLineIcon />{" "}
              </button>
            </div>

            <ul className="navbar-list">
              <li>
                <Link to="/" className="navbar-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/" className="navbar-link">
                  Login
                </Link>
              </li>
            </ul>
          </nav>
          {user ? <p>Welcome, {user}</p> : ""}
          <div className="header-actions">
            {user ? (
              <button className="btn-sign_in" onClick={handleLogout}>
                <div className="icon-box">
                  <LoginBoxLineIcon />{" "}
                </div>

                <span>Log out</span>
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
