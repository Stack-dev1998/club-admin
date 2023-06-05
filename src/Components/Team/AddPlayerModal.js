import crossIcon from '../../Assets/Icons/cross-icon.svg'
import flag from "../../Assets/Icons/flag.svg";
import edit from "../../Assets/Icons/edit.svg";
import trash from "../../Assets/Icons/trash.svg";
import selectFileIcon from "../../Assets/Icons/select-file-icon.svg";
import addIcon from "../../Assets/Icons/add.svg";
import { useState } from 'react';

const AddPlayerModal = (props) => {
    let payload = { id: 1, name: 'Max Mustermann', age: 31, nationality: "De" };
    const [list, setList] = useState([])
    const [isAddMore, setIsAddMore] = useState(true)

    return (
        <>
            <div className="modal fade show" data-backdrop="static" data-keyboard="false" id="addPlayerModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl" style={{ width: "100%" }}>
                    <div className="modal-content custom_modal">
                        <div className="d-flex justify-content-between align-items-center p-2">
                            <div className='text-center flex-grow-1'>
                                <span>Add Player</span>
                            </div>
                            <img src={crossIcon} className='cursor_pointer' data-dismiss="modal" alt='close icon' />
                        </div>
                        <div className="modal-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <h4>Add Players</h4>
                                <div className="d-flex flex align-items-center">
                                    <span className='season'>Season 2022 - 2023</span>
                                    {isAddMore ? <button className='btn ml-3 submit_player submit_player_disabled'  >
                                        Submit Players
                                    </button> :
                                        <button className='btn ml-3 submit_player'  data-toggle="modal" data-target="#confirm_modal"  >
                                            Submit Players
                                        </button>
                                    }
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
                                    {list?.length > 0 ? <tr>
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
                                            <img src={flag} alt='flag'/> DE
                                        </td>
                                        <td width={140}>
                                            <span className="box cursor_pointer">
                                                <img src={edit} alt='edit icon' />
                                            </span>
                                            <span className="ml-2 box cursor_pointer">
                                                <img src={trash}  alt='delete icon'/>
                                            </span>
                                        </td>
                                    </tr> : null}
                                </tbody>
                            </table>


                            {isAddMore ? <form onSubmit={(e) => e.preventDefault()}>
                                <div className='d-flex align-items-center'>
                                    <input type='file' hidden id='file_btn' />
                                    <img src={selectFileIcon} alt='file select icon' />
                                    <label className="btn ml-3 upload_img d-flex align-items-center justify-content-center"
                                        for='file_btn'
                                    >
                                        Upload Player Image
                                    </label>
                                </div>
                                <ul className="nav flex-column py-4 file_instruction">
                                    <li className="nav-item ">
                                        1. Image should be in png with transparent background.
                                    </li>
                                    <li className="nav-item">
                                        2. Image size should not be more than 5mb
                                    </li>
                                    <li className="nav-item">
                                        3. Player should be facing the screen.
                                    </li>
                                    <li className="nav-item">
                                        4. Player should be in view from face to torso.
                                    </li>
                                    <li className="nav-item">
                                        5. Square Image with ratio 1:1 is preferred
                                    </li>
                                </ul>
                                <div className="row w-75">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Player Name</label>
                                            <input type="text" className="form-control" placeholder="Max Mustermann" />

                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Unique Player ID</label>
                                            <select className="select-dd form-control">
                                                <option>max-mustermann</option>
                                                <option>max-mustermann</option>
                                                <option>max-mustermann</option>
                                                <option>max-mustermann</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                                <div className="row w-50">
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Position</label>
                                            <select className="select-dd form-control">
                                                <option>Goal Keeper (GK)</option>
                                                <option>Goal Keeper (GK)</option>
                                                <option>Goal Keeper (GK)</option>
                                                <option>Goal Keeper (GK)</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label>Nationality</label>
                                            <select className="select-dd form-control">
                                                <option>DE</option>
                                                <option>DE</option>
                                                <option>DE</option>
                                                <option>DE</option>
                                            </select>

                                        </div>
                                    </div>
                                </div>
                            </form> : null}

                            {isAddMore ? <button className="btn my-4 dark_outlin_btn" onClick={() => {
                                setList([payload])
                                setIsAddMore(false)
                            }} >
                                <img src={addIcon} alt='add icon' />  Add Player
                            </button> : <button className="btn my-4 dark_outlin_btn_full" onClick={() => {
                                setList([payload])
                                setIsAddMore(true)
                            }} >
                                <img src={addIcon} alt='add icon' />  Add Player
                            </button>}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default AddPlayerModal 