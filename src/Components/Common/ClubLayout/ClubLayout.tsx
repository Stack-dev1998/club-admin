import { Outlet } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import Sidebar from "../Sidebar/Sidebar";

const ClubLayout = () => {
    return (
        <>
            <Topbar />
            <section className="d-flex">
                <Sidebar />
                <section className="p-3 club_admin_section">
                    <Outlet />
                </section>
            </section>
        </>
    );
}

export default ClubLayout
