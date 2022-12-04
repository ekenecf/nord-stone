import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Splash from "./components/Splash";
import Auth from "./components/Auth";
import Notification from "./components/Notification";

import "./App.css";
import Upload from "./components/Upload";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Text from "./components/Text";
import Calculate from "./components/Calculate";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/upload" element={<Upload />} />
        <Route exact path="/login" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/text" element={<Text />} />
        <Route exact path="/calculate" element={<Calculate />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
