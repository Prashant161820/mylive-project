import { Link } from "react-router-dom";

const LeftNav =() =>{
    return(
        <ul className="list-group border-0 shadow-lg">
        <li className="list-group-item active">Quick Links</li>
        <li className="list-group-item "><Link to="/" className="text-decoration-none"><i className="fa fa-home"></i> Dashboard</Link></li>
        <li className="list-group-item "><Link to="/mybasic" className="text-decoration-none"><i className="fa fa-user"></i> My basic</Link></li>
        <li className="list-group-item "><Link to="/mycontact" className="text-decoration-none"><i className="fa fa-headset"></i> My contact</Link></li>
        <li className="list-group-item "><Link to="/myedu" className="text-decoration-none"><i className="fa fa-book"></i> My education</Link></li>
        <li className="list-group-item "><Link to="/myskill" className="text-decoration-none"><i className="fa fa-desktop"></i> My skills</Link></li>
        <li className="list-group-item "><Link to="/myproject" className="text-decoration-none"><i className="fa fa-suitcase"></i> My project</Link></li>
        <li className="list-group-item "><Link to="/myexp" className="text-decoration-none"><i className="fa fa-file"></i> My Experience</Link></li>
        
    </ul>
    )
}
export default LeftNav;