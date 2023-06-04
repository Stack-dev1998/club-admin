import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="admin_club_sidebar">
      <ul className="nav flex-column">
        <li className="nav-item active">
          <Link className="nav-link " to="/">
            <span>Team</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/cards">
          <span>Cards</span>

          </Link>
        </li>
      </ul>
      <ul className="nav flex-column">
        <li className="nav-item ">
          <Link className="nav-link " to="/">
            <span>Club Profile</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
