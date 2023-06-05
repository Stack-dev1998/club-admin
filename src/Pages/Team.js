import "../Components/Team/Team.css";
import flag from "../Assets/Icons/flag.svg";
import edit from "../Assets/Icons/edit.svg";
import trash from "../Assets/Icons/trash.svg";

import AddPlayerModal from "../Components/Team/AddPlayerModal";
import { useState } from "react";
import DeletePlayerModal from "../Components/Team/DeletePlayerModal";
import AddConfirmationPopup from "../Components/Team/AddConfirmationPopup";
import AddPlayerSuccessPopup from "../Components/Team/AddPlayerSuccessPopup";

const Team = () => {
  const [isAddPlayerPopup, setIsAddPlayerPopup] = useState(false)
  const [isDeletePlayerPopup, setIsDeletePlayerPopup] = useState(false)
  const [isAddPlayerConfPopup, setIsAddPlayerConfPopup] = useState(false)
  const [isAddPlayerSuccessPopup, setIsAddPlayerSuccessPopup] = useState(false)

  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
        <h4>Your Team</h4>
        <div className="d-flex flex">
          <select className="select">
            <option>Season 2022 - 2023</option>
            <option>Season 2021 - 2022</option>
            <option>Season 2020 - 2021</option>
            <option>Season 2019 - 2020</option>
          </select>
          <button className="btn ml-3 add_player d-flex align-items-center justify-content-center"
            data-toggle="modal" data-target="#addPlayerModal"
            onClick={() => setIsAddPlayerPopup(true)}>
            Add Players
          </button>
        </div>
      </div>
      <table className=" table club_admin_table mt-4">
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
              <div className="d-flex align-items-center">
                <span className="name_box mr-2"></span>
                <span>
                  Max Mustermann
                </span>
              </div>
            </td>
            <td>Goal Keeper</td>
            <td>31</td>
            <td>
              <img src={flag} alt="flag"/> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} alt="edit icon" />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} alt="delete"/>
              </span>
            </td>
          </tr>
          <tr>
            <td className="text-white">1</td>
            <td className="text-white" colSpan={3}>
              <div className="d-flex align-items-center">
                <span className="name_box mr-2"></span>
                <span>
                  Max Mustermann
                </span>
              </div>
            </td>
            <td>Goal Keeper</td>
            <td>31</td>
            <td>
              <img src={flag} alt="flag"/> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} alt="edit icon" />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} alt="delete"/>
              </span>
            </td>
          </tr>    <tr>
            <td className="text-white">1</td>
            <td className="text-white" colSpan={3}>
              <div className="d-flex align-items-center">
                <span className="name_box mr-2"></span>
                <span>
                  Max Mustermann
                </span>
              </div>
            </td>
            <td>Goal Keeper</td>
            <td>31</td>
            <td>
              <img src={flag} alt="flag"/> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} alt="edit icon" />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} alt="delete"/>
              </span>
            </td>
          </tr>
        </tbody>
      </table>

      <AddPlayerModal />
      <DeletePlayerModal />
      <AddConfirmationPopup />
      <AddPlayerSuccessPopup />


    </>
  );
}

export default Team
