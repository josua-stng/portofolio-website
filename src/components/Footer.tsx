import { HeartIcon } from "@heroicons/react/24/solid"
const Footer =() =>{
    return(
        <div className="text-white text-center mt-32 mb-5 font-serif flex justify-center gap-1">
            <p>Created with</p>
          <HeartIcon className="w-5 text-red-400"/>
            <span className="font-bold">by Josua Sitanggang</span>
        </div>
    )
}
export default Footer