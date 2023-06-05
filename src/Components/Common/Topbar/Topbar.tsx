import "./Topbar.css";
import Logo from "../../../Assets/Icons/7Force Logo.svg";
import UserMenu from "../../../Assets/Icons/User Menu.svg";
const Topbar = () => {
  return (
    <header className="admin_club_header d-flex align-items-center justify-content-between">
      <img src={Logo} className="pointer" alt="logo" />
      <h5>Welcome, FC Cartagena</h5>
      <img src={UserMenu} alt="user dd" />
    </header>
  );
}

export default Topbar
