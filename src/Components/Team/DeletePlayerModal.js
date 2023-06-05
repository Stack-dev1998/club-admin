import crossIcon from '../../Assets/Icons/cross-icon.svg'
import { useState } from 'react';

const DeletePlayerModal = () => {
    let payload = { id: 1, name: 'Max Mustermann', age: 31, nationality: "De" };
    const [list, setList] = useState([])
    const [isDelete, setIsDelete] = useState(false)

    return (
        <div className="modal fade" id="delete_modal" aria-labelledby="delete_modal" aria-hidden="true">
            <div className="modal-dialog  modal-dialog-centered modal-lg">
                <div className="modal-content custom_modal delete_player_confirmation ">
                    {!isDelete && <div className="modal-body p-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='text-center flex-grow-1'>
                                <span>Delete Player</span>
                            </div>
                            <img src={crossIcon} lang='cross icon' className='cursor_pointer' data-dismiss="modal" />
                        </div>

                        <div className="my-2">
                            <h5 >
                                Are you sure?
                            </h5>
                            <p>
                                That you want to remove the player from the team?
                            </p>
                            <div className="row justify-content-center">
                                <button className='btn ml-3 px-3 go_back' data-toggle="modal" data-target="#confirm_modal"   >
                                    No, go back
                                </button>
                                <button className='btn ml-3 px-3 confirm'
                                    onClick={() => setIsDelete(true)} >
                                    Yes, remove player
                                </button>
                            </div>
                        </div>

                    </div>}
                    {isDelete && <div className="modal-body p-1">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='text-center flex-grow-1'>
                                <span>Delete Player</span>
                            </div>
                            <img src={crossIcon} alt='scross icon' className='cursor_pointer' data-dismiss="modal" />
                        </div>

                        <div className="my-2">
                            <h5 className='succces'>
                                Success
                            </h5>
                            <p>
                                Your player has been deleted successfully
                            </p>
                            <div className="row justify-content-center">
                                <button className='btn ml-3 px-3 confirm' data-dismiss="modal">
                                    Continue
                                </button>
                            </div>
                        </div>

                    </div>}
                </div>
            </div>
        </div>
    );
}

export default DeletePlayerModal