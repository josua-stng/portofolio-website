import Banner from "./Banner"
import Navbar from "./Navbar"
import Project from "../project-page/Projects"
import Skills from "./Skills"

const Homepage =() =>{
    return(
        <div>
           <Navbar/>
           <Banner/>
           <Skills/>
           <Project/>
        </div>
    )
}
export default Homepage