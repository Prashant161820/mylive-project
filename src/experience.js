import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./navigation";
import { useState } from "react";
import swal from "sweetalert";

const Myexp = () => {
    let expdata=useSelector(state=>state.Myexp1);
    let[exp,setexp]=useState(expdata.totalexp);
    let[abtexp,setabtexp]=useState(expdata.abtexp);

    let dispatchexp=useDispatch();


    const saveexp=()=>{
        let expinfo={
            "totalexp":exp,
            "abtexp":abtexp
        };

        let mye={type:"exp",info:expinfo}
        dispatchexp(mye);
        swal("Saved success","Your Experience details saved successfully..","success")
        
    }

    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col-xl-3 mb-4">
                    <LeftNav/>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Experience details</h4></div>
                        <div className="card-body">
                            <label>Total Experience:</label>
                            <input type="number" className="form-control mt-1 mb-3 border-2" placeholder="Enter experience in years (ex:10)"
                            onChange={obj=>setexp(obj.target.value)} value={exp} />
                            <label>About Experience:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={16} maxLength={400} placeholder="Enter about experience..."
                              onChange={obj=>setabtexp(obj.target.value)} value={abtexp}></textarea>

                        </div>
                        <div className="card-footer bg-secondary text-white text-center">
                            <button className="btn btn-danger mt-2 mb-2" onClick={saveexp}>Save & Continue</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mb-4"></div>
            </div>


        </div>
    )
}
export default Myexp;