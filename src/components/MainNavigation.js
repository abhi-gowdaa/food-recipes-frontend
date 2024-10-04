import { NavLink } from "react-router-dom";
import "./MainNavigation.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Typography } from "@mui/material";

export function MainNavigation() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="nav-left">
          <RestaurantMenuIcon />
          <Typography variant="h5" sx={{ color: "white" }}>
            Food Recipe
          </Typography>
        </div>

        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/search"
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
              to="/searc"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
