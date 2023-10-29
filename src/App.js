import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import "./app.css"

const App = () => {
  const[page,setPage] = useState("homepage")

  return (
    <div className="App">
      <div className="btns">
        <button onClick={() => setPage("homepage")} className="btn">
          Ana Sayfa
        </button>
        <button onClick={() => setPage("loginpage")} className="btn">
          Giriş Yap
        </button>
        <button onClick={() => setPage("registerpage")} className="btn">
          Kayıt Ol
        </button>
        <button onClick={() => setPage("profilepage")} className="btn">
          Profil
        </button>
      </div>

      {page === "homepage" ? <Home /> : page === "loginpage" ? <Login /> : page === 'registerpage' ? <Register /> : <Profile /> }
    </div>
  );
}

export default App;
