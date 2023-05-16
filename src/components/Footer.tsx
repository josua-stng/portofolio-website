import { HeartIcon } from "@heroicons/react/24/solid"
const Footer =() =>{
    return(
        <div className="text-white text-center mt-32 mb-5 font-serif flex justify-center animate__animated animate__fadeInDown">
            <p>Created with</p>
          <HeartIcon className="w-5 text-red-400 mr-1 ml-1"/>
            <span className="font-bold">by Josua Sitanggang</span>
        </div>
    )
}
export default Footer