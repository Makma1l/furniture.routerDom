import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Link,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Services from "./components/Services";
import NotFound from "./components/NotFound";
import SELHONO from "./assets/SELHONO.png"
import search from "./assets/Search.png"
function App() {
  return (
    <>
      <Router>
        <div className="navbar flex flex-col">
          <img className="logo w-227px h-50px" src={SELHONO} alt="LOGO" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <Link>Pages</Link>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/product">Projects</NavLink>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <img src={search} alt="search" />
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
