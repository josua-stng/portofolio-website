import Logo from '../assets/img/logo.jpg';
import { useState } from 'react';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="flex bg-black justify-between items-center font-serif z-10">
      <div>
        <img
          src={Logo}
          alt="logo_image"
          className="w-16 cursor-pointer ml-5 rounded"
        />
      </div>
      <div>
        <div className="sm:hidden">
          <button className='mr-5' onClick={handleIsOpen}>
            {isOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
            <Bars4Icon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
        <ul className={`${isOpen?"flex flex-col fixed left-0 right-0 bottom-0 top-14 leading-10 h-52 pl-5 bg-gray-300 pt-5 text-center cursor-pointer z-10":"hidden sm:flex text-white p-6 [&>*]:mx-5 [&>*]:cursor-pointer"}`}>
          <li className="hover:text-gray-400">Home</li>
          <li className="hover:text-gray-400">Projects</li>
          <li className="hover:text-gray-400">About</li>
          <li className="hover:text-gray-400">Contact</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
