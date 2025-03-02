import { Link } from "react-router-dom";

const LeftNav =() =>{
    return(
        <ul className="list-group border-0 shadow-lg">
        <li className="list-group-item active">Quick Links</li>
        <li className="list-group-item "><Link to="/"><i className="fa fa-home"></i> Dashboard</Link></li>
        <li className="list-group-item "><Link to="/mybasic"><i className="fa fa-user"></i> My basic</Link></li>
        <li className="list-group-item "><Link to="/mycontact"><i className="fa fa-headset"></i> My contact</Link></li>
        <li className="list-group-item "><Link to="/myedu"><i className="fa fa-book"></i> My education</Link></li>
        <li className="list-group-item "><Link to="/myskill"><i className="fa fa-desktop"></i> My skills</Link></li>
        <li className="list-group-item "><Link to="/myproject"><i className="fa fa-suitcase"></i> My project</Link></li>
        <li className="list-group-item "><Link to="/myexp"><i className="fa fa-file"></i> My Experience</Link></li>
        
    </ul>
    )
}
export default LeftNav;