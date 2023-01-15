import Home from "./Home";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import Aboutpage from "./Aboutpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<Aboutpage />} />
            {/* <Route path="/login" element={<LoginPage />} />
            
            <Route path="/signup" element={<SignUp />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
