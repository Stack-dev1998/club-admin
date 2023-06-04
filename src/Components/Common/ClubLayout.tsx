import {  Outlet } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function ClubLayout() {
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
