import { HashRouter, Routes, Route, } from 'react-router-dom';
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

      {/* <div className="container mt-4">
        <div className="row">
          <div className="col-xl-3 mb-4"></div>
          <div className="col-xl-6 mb-4"> */}
            <Routes>
              <Route exact path='/mybasic' element={<Mybasic />} />
              <Route exact path='/mycontact' element={<Mycontact />} />
              <Route exact path='/myedu' element={<Myeducation />} />
              <Route exact path='/myskill' element={<Myskill />} />
              <Route exact path='/myproject' element={<Myproject />} />
              <Route exact path='/myexp' element={<Myexp />} />
              <Route exact path='/' element={<FinalPreview/>} />
            </Routes>

          {/* </div>
          <div className="col-xl-3 mb-4"></div>
        </div>
      </div> */}


    </HashRouter>
  );
}

export default App;
