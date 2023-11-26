import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import FourOFour from "./Pages/FourOFour";

function App() {
    return (
      <div className="App">
        <Router>
         <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
      </div>
    );
  }

  export default App;