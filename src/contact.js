import { useDispatch,useSelector } from "react-redux";
import LeftNav from "./navigation";
import { useState } from "react";
const Mycontact = () => {


    let contactdata=useSelector(state=>state.MyContact1)

    let[Mob,setMob] =useState(contactdata.mobile);
    let[Email,setemail]=useState(contactdata.email);
    let[loc,setloc]=useState(contactdata.localadd);
    let[per,setper]=useState(contactdata.permadd);
    let[ref,setref]=useState(contactdata.reference);

    let dispatchcon=useDispatch();


    const save = () =>{

        let contactinfo={
            "mobile":Mob,
            "email":Email,
            "localadd":loc,
            "permadd":per,
            "reference":ref            
          };
          let mycontact ={type:"contact",info:contactinfo};
          dispatchcon(mycontact);
          alert("saved")
        
    }





    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col-xl-3 mb-4">
                    <LeftNav/>
                </div>
                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Contact details</h4></div>
                        <div className="card-body">
                            <label>Mobile No:</label>
                            <input type="number" className="form-control mt-1 mb-3 border-2" placeholder="Enter Mobile Number" 
                            onChange={obj=>setMob(obj.target.value)} value={Mob}/>
                            <label>Email:</label>
                            <input type="email" className="form-control mt-1 mb-3 border-2" placeholder="Enter email address"
                             onChange={obj=>setemail(obj.target.value)} value={Email}/>
                            <label>Local Address:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter message"
                            onChange={obj=>setloc(obj.target.value)} value={loc}></textarea >
                            <label>Permanent Address:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter message"
                            onChange={obj=>setper(obj.target.value)} value={per}></textarea>
                            <label>Any reference Address and contact:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter message" 
                            onChange={obj=>setref(obj.target.value)} value={ref}></textarea>

                        </div>
                        <div className="card-footer bg-secondary text-white text-center">
                            <button className="btn btn-danger mt-2 mb-2" onClick={save}>Save & Continue</button>
                        </div>
                    </div>


                </div>
                    <div className="col-xl-3 mb-4"></div>
            </div>


        </div>

    )
}
export default Mycontact;