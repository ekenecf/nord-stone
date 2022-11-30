import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './components/Splash';
import Auth from "./components/Auth";
import Notification from './components/Notification';

import './App.css';
import Upload from './components/Upload';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route exact path="/auth" element={<Auth />} />
          <Route exact path="/notification" element={<Notification />} />
          <Route exact path="/upload" element={<Upload />} />
        </Routes>
      </Router>
  );
}

export default App;
