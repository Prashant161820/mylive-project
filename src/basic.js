import LeftNav from "./navigation";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
const Mybasic = () => {


    let basicdata =useSelector(state=>state.MyBasic1);
    let[name, setName]=useState(basicdata.fullname);
    let[dob, setdob]=useState(basicdata.dob);
    let[gender, setgender]=useState(basicdata.gender);
    let[marry, setmarry]=useState(basicdata.married);
    let[status, setstatus]=useState(basicdata.profilestatus);
    let[about, setabout]=useState(basicdata.about);

    let dispatch=useDispatch();

    const save =()=>{
        
       let userinfo ={
        "fullname":name,
        "dob":dob,
        "gender":gender,
        "married":marry,
        "profilestatus":status,
        "about":about
       };

       let mydata ={type:"basic",info:userinfo};
       dispatch(mydata);
       alert("basic details saved successfully")
    }

     
    
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-xl-3 mb-4">
                    <LeftNav/>
                </div>
                <div className="col-xl-6 mb-4">

                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Basic details</h4></div>
                        <div className="card-body">
                            <label>FullName:</label>
                            <input type="text" className="form-control mt-1 mb-3 border-2" placeholder="Enter Full name" onChange={obj=>setName(obj.target.value)} value={name} />
                            <label>DOB:</label >
                            <input type="date" className="form-control mt-1 mb-3 border-2" onChange={obj=>setdob(obj.target.value)} value={dob}/>
                            <label>Gender:</label>
                            <select className="form-select border-2 mt-1 mb-3" onChange={obj=>setgender(obj.target.value)} value={gender}>
                                <option>Choose</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                            <label>Married:</label>
                            <select className="form-select border-2 mt-1 mb-3"onChange={obj=>setmarry(obj.target.value)} value={marry} >
                                <option>Choose</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <label>Profile Status:</label>
                            <select className="form-select border-2 mt-1 mb-3"onChange={obj=>setstatus(obj.target.value)} value={status}>
                                <option>Choose</option>
                                <option>Active</option>
                                <option>Inactive</option>
                            </select>
                            <label>About Yourself:</label>
                            <textarea className="form-control border-2 mt-1 mb-3" placeholder="Enter message" 
                            style={{ resize: "none" }} rows={4} maxLength={200} onChange={obj=>setabout(obj.target.value)} value={about}></textarea>

                        </div>
                        <div className="card-footer  text-white text-center">
                            <button className="btn btn-danger mt-2 mb-2" onClick={save}>Save & Continue</button>
                        </div>
                    </div>

                </div>
                <div className="col-xl-3 mb-4"></div>

            </div>


        </div>



    )
}
export default Mybasic;