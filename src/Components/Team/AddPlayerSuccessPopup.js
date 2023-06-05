import React from 'react'

function AddPlayerSuccessPopup() {
    return (
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
                            <button className='btn ml-3 view_all_players' data-dismiss="modal"  >
                                View all players
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPlayerSuccessPopup