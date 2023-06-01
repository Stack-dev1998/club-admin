import React from "react";
import "./Cards.css";
import Topbar from "../Components/Common/Topbar";
import Sidebar from "../Components/Common/Sidebar";
import flag from "../Assets/Icons/flag.svg";
import edit from "../Assets/Icons/edit.svg";
import trash from "../Assets/Icons/trash.svg";

export default function Cards() {
  return (
    <>
      <Topbar />
      <section className="d-flex">
        <Sidebar />
        <section className="p-3 club_admin_section">
          <div className="d-flex align-items-center justify-content-between">
            <h4>Player Cards</h4>
            <div className="d-flex flex">
              <select className="select">
                <option>Season 2022 - 2023</option>
                <option>Season 2021 - 2022</option>
                <option>Season 2020 - 2021</option>
                <option>Season 2019 - 2020</option>
              </select>
              <button className="btn ml-3 add_player d-flex align-items-center justify-content-center">
                MINT CARDS
              </button>
            </div>
          </div>
          <table className=" table mt-4">
            <thead>
              <tr>
                <th
                  className="text-white"
                  style={{ borderRadius: "20px 0 0 0" }}
                >
                  #
                </th>
                <th className="text-white">NAME</th>
                <th>
                  <span className="circle"></span>Basic
                </th>
                <th>
                  <span></span>Limited
                </th>
                <th>
                  <span></span>Pro
                </th>
                <th style={{ borderRadius: "0 20px 0 0" }}>
                  <span></span>Legend
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white">
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>
                  <span className="text-white">0</span>/40,000
                </td>
                <td>
                  <span className="text-white">0</span>/10,000
                </td>
                <td>
                  <span className="text-white">0</span>/2,000
                </td>
                <td>
                  <span className="text-white">0</span>/200
                </td>
              </tr>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white">
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>
                  <span className="text-white">0</span>/40,000
                </td>
                <td>
                  <span className="text-white">0</span>/10,000
                </td>
                <td>
                  <span className="text-white">0</span>/2,000
                </td>
                <td>
                  <span className="text-white">0</span>/200
                </td>
              </tr>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white">
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>
                  <span className="text-white">0</span>/40,000
                </td>
                <td>
                  <span className="text-white">0</span>/10,000
                </td>
                <td>
                  <span className="text-white">0</span>/2,000
                </td>
                <td>
                  <span className="text-white">0</span>/200
                </td>
              </tr>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white">
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>
                  <span className="text-white">0</span>/40,000
                </td>
                <td>
                  <span className="text-white">0</span>/10,000
                </td>
                <td>
                  <span className="text-white">0</span>/2,000
                </td>
                <td>
                  <span className="text-white">0</span>/200
                </td>
              </tr>
              <tr>
                <td className="text-white">1</td>
                <td className="text-white">
                  <span className="box mr-2">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                  Max Mustermann
                </td>
                <td>
                  <span className="text-white">0</span>/40,000
                </td>
                <td>
                  <span className="text-white">0</span>/10,000
                </td>
                <td>
                  <span className="text-white">0</span>/2,000
                </td>
                <td>
                  <span className="text-white">0</span>/200
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}
