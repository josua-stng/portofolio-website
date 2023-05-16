import { Routes ,Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProject from "./project-page/AllProject";
import AboutMe from "./components/About";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/project" element={<AllProject/>}/>
        <Route path="/about" element={<AboutMe/>}/>
      </Routes>
    </>
  )
}

export default App
