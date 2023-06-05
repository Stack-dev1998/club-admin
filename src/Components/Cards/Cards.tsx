const Cards = () => {
    return (
        <>
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
            <table className=" table club_admin_table mt-4">
                <thead>
                    <tr>
                        <th
                            className="text-white "
                            style={{ borderRadius: "20px 0 0 0" }}
                        >
                            #
                        </th>
                        <th className="text-white">NAME</th>
                        <th>
                            <div className="d-flex align-items-center">
                                <span className=" circle basic"></span>
                                <span>Basic</span>
                            </div>
                        </th>
                        <th>
                            <div className="d-flex align-items-center limited">
                                <span className=" circle "></span>
                                <span>Limited</span>
                            </div>

                        </th>
                        <th>
                            <div className="d-flex align-items-center pro">
                                <span className="circle"></span>
                                <span>Pro</span>
                            </div>
                        </th>
                        <th style={{ borderRadius: "0 20px 0 0" }}>
                            <div className="d-flex align-items-center legend">
                                <span className="circle"></span>
                                <span>Legend</span>
                            </div>
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
        </>
    )
}

export default Cards
