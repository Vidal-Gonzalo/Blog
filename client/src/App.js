import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Blog
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a href="/" className="nav-link active" aria-current="page">
                Inicio
              </a>
              <a href="/createpost" className="nav-link active">
                Nueva publicación
              </a>
            </div>
          </div>
        </div>
      </nav>

      <Router>
        <Route path="/" exact render={(props) => <MainPage />} />
        <Route path="/createpost" exact render={(props) => <CreatePost />} />
      </Router>
    </>
  );
}

export default App;
