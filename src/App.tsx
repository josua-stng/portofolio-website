import { Routes ,Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import AllProject from "./project-page/AllProject";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/project" element={<AllProject/>}/>
      </Routes>
    </>
  )
}

export default App
