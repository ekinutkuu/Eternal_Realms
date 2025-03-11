import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import RealmsList from "./pages/RealmsList";
import Realm from "./pages/Realm";

function App() {
   return (
      <Router>
         <Routes>
            <Route path="/" element={<RealmsList />} />
            <Route path="/realms" element={<RealmsList />} />
            <Route path="/realms/:name" element={<Realm />} />
         </Routes>
      </Router>
   );
}

export default App;
