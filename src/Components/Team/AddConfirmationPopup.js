function AddConfirmationPopup(props) {
    return (
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
                                data-toggle="modal" data-target="#success_modal" data-dismiss="modal" onClick={props?.handleSuccess}  >
                                Yes, everything is correct
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddConfirmationPopup