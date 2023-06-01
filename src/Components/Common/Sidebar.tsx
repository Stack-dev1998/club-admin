import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="admin_club_sidebar">
      <ul className="nav flex-column">
        <li className="nav-item active">
          <Link className="nav-link " to="/">
            Team
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/cards">
            Cards
          </Link>
        </li>
      </ul>
    </aside>
  );
}
