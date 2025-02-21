import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Realms from "./pages/Realms";

function App() {
   return (
      <Router>
         <div className="App">
            <Routes>
               <Route path="/" element={<Realms />} />
               <Route path="/realms" element={<Realms />} />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
