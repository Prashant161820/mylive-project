import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./navigation";
import { useState } from "react";

const Myskill = () => {

    let skilldata=useSelector(state=>state.Myskill1);
    let[skill,setskill]=useState(skilldata.skills);

    let dispatchskill=useDispatch();

    const saveskill =()=>{
        let skillinfo={
            "skills":"skill"
        };

        let mydat ={type:"skill",info:skillinfo};
        dispatchskill(mydat);
        alert("skills details saved successfully")
    }




    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col-xl-3 mb-4">
                    <LeftNav />
                </div>
                <div className="col-xl-6 mb-4">

                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Skill details</h4></div>
                        <div className="card-body">
                            <label>Enter Skills:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={14} maxLength={300} placeholder="Enter skills" 
                            onChange={obj=>setskill(obj.target.value)} value={skill}></textarea>
                        </div>
                        <div className="card-footer bg-secondary text-white text-center">
                            <button className="btn btn-danger mt-2 mb-2" onClick={saveskill}>Save & Continue</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 mb-4"></div>
            </div>

        </div>
    )
}
export default Myskill;