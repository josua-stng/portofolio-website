import Banner from "./Banner"
import Navbar from "./Navbar"
import Project from "../project-page/Projects"
import Skills from "./Skills"
import GetInTouch from "./GetnTouch"
import Footer from "./Footer"

const Homepage =() =>{
    return(
        <div>
           <Navbar/>
           <Banner/>
           <Skills/>
           <Project/>
           <GetInTouch/>
           <Footer/>
        </div>
    )
}
export default Homepage