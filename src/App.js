import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
