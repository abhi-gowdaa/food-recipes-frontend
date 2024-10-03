import { NavLink } from "react-router-dom";
import "./MainNavigation.css";  
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { Typography } from "@mui/material";

export function MainNavigation() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        {/* Left section with icon and text */}
        <div className="nav-left">
          <RestaurantMenuIcon />
          <Typography variant="h5" sx={{color:"white"}}>Food Recipe</Typography>
        </div>
        
        {/* Center section with navigation links */}
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
              to="/pro"
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
