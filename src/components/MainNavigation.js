import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import "../globalStyles/styles.css"

export function MainNavigation() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="nav-left">
          <RestaurantMenuIcon />
          <h2 className="heading">
            Food Recipe
          </h2>
        </div>

        <ul className="nav-list">
        <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              end
            >
              Explore
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/search/visualize"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Visualize
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
