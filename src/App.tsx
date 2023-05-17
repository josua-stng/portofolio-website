import { Routes ,Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProject from "./project-page/AllProject";
import AboutMe from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/project" element={<AllProject/>}/>
        <Route path="/about" element={<AboutMe/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
