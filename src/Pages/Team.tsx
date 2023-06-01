import React from "react";
import "./Cards.css";
import Topbar from "../Components/Common/Topbar";
import Sidebar from "../Components/Common/Sidebar";
import flag from "../Assets/Icons/flag.svg";
import edit from "../Assets/Icons/edit.svg";
import trash from "../Assets/Icons/trash.svg";

export default function Team() {
  return (
    <>
      <Topbar />
      <section className="d-flex">
        <Sidebar />
        <section className="p-3 club_admin_section">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Your Team</h4>
            <div className="d-flex flex">
              <select className="select">
                <option>Season 2022 - 2023</option>
                <option>Season 2021 - 2022</option>
                <option>Season 2020 - 2021</option>
                <option>Season 2019 - 2020</option>
              </select>
              <button className="btn ml-3 add_player d-flex align-items-center justify-content-center">
                Add Players
              </button>
            </div>
          </div>
          <table className=" table mt-4">
            <thead>
              <tr className="text-white">
                <th style={{ borderRadius: "20px 0 0 0" }}>#</th>
                <th colSpan={3}>NAME</th>
                <th>POSITION</th>
                <th>AGE</th>
                <th>NATIONALITY</th>
                <th style={{ borderRadius: "0 20px 0 0" }}></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white" colSpan={3}>
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>Goal Keeper</td>
                <td>31</td>
                <td>
                  <img src={flag} /> DE
                </td>
                <td width={140}>
                  <span className="box">
                    <img src={edit} />
                  </span>
                  <span className="ml-2 box">
                    <img src={trash} />
                  </span>
                </td>
              </tr>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white" colSpan={3}>
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>Goal Keeper</td>
                <td>31</td>
                <td>
                  <img src={flag} /> DE
                </td>
                <td width={140}>
                  <span className="box">
                    <img src={edit} />
                  </span>
                  <span className="ml-2 box">
                    <img src={trash} />
                  </span>
                </td>
              </tr>{" "}
              <tr>
                <td className="text-white">1</td>
                <td className="text-white" colSpan={3}>
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>Goal Keeper</td>
                <td>31</td>
                <td>
                  <img src={flag} /> DE
                </td>
                <td width={140}>
                  <span className="box">
                    <img src={edit} />
                  </span>
                  <span className="ml-2 box">
                    <img src={trash} />
                  </span>
                </td>
              </tr>{" "}
              <tr>
                <td className="text-white">1</td>
                <td className="text-white" colSpan={3}>
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>Goal Keeper</td>
                <td>31</td>
                <td>
                  <img src={flag} /> DE
                </td>
                <td width={140}>
                  <span className="box">
                    <img src={edit} />
                  </span>
                  <span className="ml-2 box">
                    <img src={trash} />
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}
