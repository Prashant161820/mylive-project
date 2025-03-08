import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FinalPreview from './preview';
import Mybasic from './basic';
import Mycontact from './contact';
import Myeducation from './education';
import Myskill from './skill';
import Myproject from './project';
import Myexp from './experience';

function App() {
  return (
    <HashRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link className="navbar-brand" ><i className='fa fa-user fa-lg'></i>Profile Management</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/"><i className='fa fa-home'></i> My Home</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/mybasic"><i className='fa fa-user'></i> Basic</Link>
              </li>
              <li className="nav-item me-4">
                <Link className="nav-link active" to="/mycontact"><i className='fa fa-headset'></i> contact</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/myedu"><i className='fa fa-book'></i> Education</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active " to="/myskill"><i className='fa fa-desktop'></i> Skills</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/myproject"><i className='fa fa-suitcase'></i> Project</Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link active" to="/myexp"><i className='fa fa-file'></i> Experience</Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>


      <Routes>
        <Route exact path='/mybasic' element={<Mybasic />} />
        <Route exact path='/mycontact' element={<Mycontact />} />
        <Route exact path='/myedu' element={<Myeducation />} />
        <Route exact path='/myskill' element={<Myskill />} />
        <Route exact path='/myproject' element={<Myproject />} />
        <Route exact path='/myexp' element={<Myexp />} />
        <Route exact path='/' element={<FinalPreview />} />
      </Routes>




    </HashRouter>
  );
}

export default App;
