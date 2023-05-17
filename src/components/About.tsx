import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import 'animate.css';
const AboutMe = () => {
  return (
    <div className="text-white">
      <Navbar />
      <div className="flex flex-col md:flex-row-reverse justify-center items-center mt-10 md:mt-[70px]  md:pb-7 animate__animated animate__fadeInDown">
        <div>
          <img
            src="https://raw.githubusercontent.com/josua-stng/josua-stng.github.io/master/img/my_photo.png"
            alt="about_image"
            className="max-w-[208px] md:max-w-xs"
          />
        </div>

        <div className="max-w-lg md:mr-10 p-5 border-2 border-gray-700 rounded-xl mt-8">
          <div className="font-bold text-xl  md:text-4xl font-mono">
            <h1>Hi,</h1>
            <h1 className="mt-2 mb-2">I'm Josua,</h1>
            <h1>Front-end Developer</h1>
          </div>
          <div className="font-sans mt-5 leading-7 text-blue text-sm md:text-base">
            <p>I design and develop experiences that make people's lives</p>
            <p>simple through Web and Mobile Web.I work with HTML5 ,</p>
            <p>CSS3,Javascript,React,Tailwind CSS,and Typescript</p>
            <p>now i always continue to learn to give the best.</p>
          </div>
          <div className="flex justify-between mt-10 font-serif items-center text-sm md:text-base">
            <Link
              to="/project"
              className=" border-2 border-white p-2 rounded-lg bg-lime-800 hover:bg-lime-500 hover:text-black"
            >
              SEE MY PROJECTS
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white p-2 rounded-lg bg-green-700 hover:bg-green-500 hover:text-black"
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AboutMe;
