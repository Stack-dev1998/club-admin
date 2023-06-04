import "./Cards.css";
import flag from "../Assets/Icons/flag.svg";
import edit from "../Assets/Icons/edit.svg";
import trash from "../Assets/Icons/trash.svg";
import crossIcon from '../Assets/Icons/cross-icon.svg'

import AddPlayerModal from "../Components/Team/AddPlayerModal";
import { useState } from "react";
import DeletePlayerModal from "../Components/Team/DeletePlayerModal";

export default function Team() {
  return (
    <>
      <AddPlayerModal />
      <DeletePlayerModal/>
      {/* Confirmation popup modal */}
      <div className="modal fade" id="confirm_modal" aria-labelledby="confirm_modal" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered modal-lg">
          <div className="modal-content custom_modal player_confirmation px-4">
            <div className="modal-body">
              <h5 >
                Are you sure?
              </h5>
              <p>
                Make sure that the player data you have entered is correct.
              </p>
              <div className="row justify-content-center">
                <button className='btn ml-3 go_back'
                  data-toggle="modal" data-target="#confirm_modal"   >
                  No, go back
                </button>
                <button className='btn ml-3 confirm'
                  data-toggle="modal" data-target="#success_modal" data-dismiss="modal" >
                  Yes, everything is correct
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Success popup modal */}
      <div className="modal fade" id="success_modal" aria-labelledby="success_modal" aria-hidden="true">
        <div className="modal-dialog  modal-dialog-centered modal-lg">
          <div className="modal-content custom_modal succes_confirmation px-4">
            <div className="modal-body my-3">
              <h5 className="">
                Players Added successfully ✨
              </h5>

              <div className="row my-4 ">
                <div className="col-4 ">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>

                <div className="col-4 ">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="player_box my-2">
                    <span className="player_img_box"></span>
                    <span className="ml-2">Max Mustermann</span>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <button className='btn ml-3 view_all_players'
                  data-dismiss="modal"  >
                  View all players
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
     

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
            data-toggle="modal" data-target="#addPlayerModal">
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
              <img src={flag} /> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} />
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
              <img src={flag} /> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} />
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
              <img src={flag} /> DE
            </td>
            <td width={140}>
              <span className="box cursor_pointer">
                <img src={edit} />
              </span>
              <span className="ml-2 box cursor_pointer" data-toggle="modal" data-target="#delete_modal">
                <img src={trash} />
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </>

  );
}
