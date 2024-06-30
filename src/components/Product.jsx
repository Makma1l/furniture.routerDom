import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import project from "../assets/Projects page.png";
import "./product.css";

const FurnitureCategory = ({ category }) => {
  const [furniture, setFurniture] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/furniture?category=${category}`)
      .then((response) => response.json())
      .then((data) => setFurniture(data));
  }, [category]);

  return (
    <div className="furniture-list">
      {furniture.map((item) => (
        <div key={item.id} className="furniture-item">
          <img src={`/assets/${item.image}`} alt={item.name} />
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

FurnitureCategory.propTypes = {
  category: PropTypes.string.isRequired,
};

const Product = () => {
  return (
    <div>
      <img className="projects-img" src={project} alt="Projects" />
      <div className="container">
        <div className="projects-content">
          <div className="projects-img">
            <div className="projects-txt">
              <h1>Services</h1>
            </div>
          </div>
          <div className="tabs-toggler">
            <div className="toggler">
              <ul>
                <li>
                  <NavLink to="/product/bathroom">Bathroom</NavLink>
                </li>
                <li>
                  <NavLink to="/product/bedroom">Bed Room</NavLink>
                </li>
                <li>
                  <NavLink to="/product/kitchen">Kitchen</NavLink>
                </li>
                <li>
                  <NavLink to="/product/livingarea">Living Area</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/bathroom"
          element={<FurnitureCategory category="bathroom" />}
        />
        <Route
          path="/bedroom"
          element={<FurnitureCategory category="bedroom" />}
        />
        <Route
          path="/kitchen"
          element={<FurnitureCategory category="kitchen" />}
        />
        <Route
          path="/livingarea"
          element={<FurnitureCategory category="livingarea" />}
        />
      </Routes>
    </div>
  );
};

export default Product;
