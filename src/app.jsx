import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import NavBar from "./Components/NavBar";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Missions from './Pages/Missions';
import SolarSystemSearch from './Pages/SolarSystemSearch';

function App() {
    return (
      <div className="App">
        <Router>
         <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Missions" element={<Missions />} />
              <Route path="/SolarSystemSearch" element={<SolarSystemSearch />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
      </div>
    );
  }

  export default App;