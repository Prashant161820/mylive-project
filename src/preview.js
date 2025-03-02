import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const FinalPreview = () => {
    let basicdata = useSelector(state => state.MyBasic1);
    let edudata = useSelector(state => state.Myedu1);
    let skilldata = useSelector(state => state.Myskill1);
    let projectdata = useSelector(state => state.Mypro1);
    let expdata = useSelector(state => state.Myexp1);
    let contactdata = useSelector(state => state.MyContact1);

    return (
        <div className="container mt-4">
            <div className="row">


                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Basic details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>FullName:</td><td>{basicdata.fullname}</td></tr>
                                    <tr><td>Gender:</td><td>{basicdata.gender}</td></tr>
                                    <tr><td>DOB:</td><td>{basicdata.dob}</td></tr>
                                    <tr><td>Married:</td><td>{basicdata.married}</td></tr>
                                    <tr><td>Profile:</td><td>{basicdata.profilestatus}</td></tr>
                                    <tr><td>About:</td><td>{basicdata.about}</td></tr>
                                </tbody>

                            </table>
                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>contact details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>Mobile Number:</td><td>{contactdata.mobile}</td></tr>
                                    <tr><td>Email:</td><td>{contactdata.email}</td></tr>
                                    <tr><td>Local Addr:</td><td>{contactdata.localadd}</td></tr>
                                    <tr><td>Permanent Addr:</td><td>{contactdata.permadd}</td></tr>
                                    <tr><td>Reference:</td><td>{contactdata.reference}</td></tr>
                                </tbody>


                            </table>

                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Education details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>Hiighest Edu:</td><td>{edudata.hedu}</td></tr>
                                    <tr><td>Pass Year:</td><td>{edudata.pass}</td></tr>
                                    <tr><td>Grade:</td><td>{edudata.grade}</td></tr>
                                    <tr><td>College:</td><td>{edudata.college}</td></tr>
                                </tbody>


                            </table>
                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>

                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Skill details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>List of skills:</td><td>{skilldata.skills}</td></tr>
                                </tbody>


                            </table>

                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Project details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>Project Name:</td><td>{projectdata.proname}</td></tr>
                                    <tr><td>Project details:</td><td>{projectdata.prodetails}</td></tr>
                                    <tr><td>Technology Used:</td><td>{projectdata.tech}</td></tr>
                                    <tr><td>URL:</td><td>{projectdata.url}</td></tr>
                                </tbody>


                            </table>
                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-xl-6 mb-4">
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white"><h4>Experience details</h4></div>
                        <div className="card-body">
                            <table className="table">
                                <tbody>
                                    <tr><td>Total Experience:</td><td>{expdata.totalexp}</td></tr>
                                    <tr><td>About Experience:</td><td>{expdata.abtexp}</td></tr>
                                </tbody>


                            </table>
                        </div>
                        <div className="card-footer  text-white ">
                            <h4><Link to="/myedu" className="text-decoration-none"><i className="fa fa-edit"></i>Edit</Link></h4>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default FinalPreview;