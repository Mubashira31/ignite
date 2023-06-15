import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../../my-ignite/src/Components/Registration/Register";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import Home from "./Components/Home/Home";
import Suggestion from "./Components/Suggestions/suggestion";
import Logout from "./Components/Logout/logout";
import Event from "./Components/Event/Event";
const Routing = () => {
  return (
    <Router>
    <Routes>
      <Route element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/suggest" element={<Suggestion />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/event" element={<Event/>}/>
    </Routes></Router>
  );
};
const App = () => {
  return (
    
    <>

    <Routing/>
    </>
  );
}
export default App;
