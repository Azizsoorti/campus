import Login from "./components/Login/Login";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup"

function App() {
  return (
    <>
   <Routes>
        <Route path="/" element={<Login />} />
        <Route path='signup' element={<Signup />}/>
       
      </Routes>
    </>
  );
}

export default App;
