import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./navigation";
import { useState } from "react";
import swal from "sweetalert";

const Myeducation = () => {

    let edudata = useSelector(state=>state.Myedu1)

    let [edu, sethedu] = useState(edudata.hedu);
    let [passy, setpassy] = useState(edudata.pass);
    let [per, setper] = useState(edudata.grade);
    let [coll, setcoll] = useState(edudata.college);

    let dispatchedu = useDispatch();

    const saveedu = () => {
        let eduinfo = {
            "hedu": edu,
            "pass": passy,
            "grade": per,
            "college": coll

        };
        let myedu = { type:"edu",info:eduinfo};
        dispatchedu(myedu);
        swal("Saved success","Your Education details saved successfully..","success")

    }


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-3 mb-4">
                    <LeftNav />
                </div>
                <div className="col-xl-6 mb-4">

                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Education details</h4></div>
                        <div className="card-body">
                            <label>Hiighest Education:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" placeholder="Enter message"
                                onChange={obj => sethedu(obj.target.value)} value={edu}></textarea>
                            <label>Passing Year:</label>
                            <input type="number" className="form-control mt-1 mb-3 border-2" placeholder="Enter passing year"
                                onChange={obj => setpassy(obj.target.value)} value={passy} />
                            <label>Grade/Percentage(%) :</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" placeholder="Enter Grade/Percentage"
                                onChange={obj => setper(obj.target.value)} value={per}></textarea>
                            <label>College/University:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" placeholder="Enter College/University"
                                onChange={obj => setcoll(obj.target.value)} value={coll}></textarea>
                        </div>
                        <div className="card-footer bg-secondary text-white text-center">
                            <button className="btn btn-danger mt-2 mb-2" onClick={saveedu}>Save & Continue</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mb-4"></div>

            </div>



        </div>
    )
}
export default Myeducation;