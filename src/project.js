import { useDispatch, useSelector } from "react-redux";
import LeftNav from "./navigation";
import { useState } from "react";
import swal from "sweetalert";

const Myproject = () => {
    let projectdata=useSelector(state=>state.Mypro1);
    let[name,setname]=useState(projectdata.proname);
    let[detail,setdetail]=useState(projectdata.prodetails);
    let[tech,settech]=useState(projectdata.tech);
    let[url,seturl]=useState(projectdata.url);

    let dispatchpro=useDispatch();

    const save = () =>{
        let proinfo={

            "proname":name,
            "prodetails":detail,
            "tech":tech,
            "url":url
        };

        let mypro={type:"pro",info:proinfo};
        dispatchpro(mypro);
        swal("Saved success","Your Project details saved successfully..","success")

    }

    return (
        <div className="container mt-4">
            <div className="row">
            <div className="col-xl-3 mb-4">
                    <LeftNav />
                </div>
                <div className="col-xl-6 mb-4">

                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Project details</h4></div>
                        <div className="card-body">
                            <label>Project Name:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter Project Name"
                            onChange={obj=>setname(obj.target.value)} value={name}></textarea>
                            <label>Project Details:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter Project Details"
                            onChange={obj=>setdetail(obj.target.value)} value={detail}></textarea>
                            <label>Technology Used:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Enter technology used"
                            onChange={obj=>settech(obj.target.value)} value={tech}></textarea>
                            <label>Any live url:</label>
                            <textarea className="form-control  mt-1 mb-3 border-2" rows={3} placeholder="Give url.."
                            onChange={obj=>seturl(obj.target.value)} value={url}></textarea>
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
export default Myproject;