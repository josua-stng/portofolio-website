const GetInTouch = () => {
  return (
    <div className="text-zinc-300 text-center mx-auto border-2 border-gray-200 max-w-md mt-20 bg-stone-800 rounded-xl ">
      <div className="p-5">
        <h1 className="text-xl md:text-2xl font-bold mb-4">Get In Touch</h1>
        <div>
          <p>Want to know me more? contact me on</p>
          <p>social media and i will always be open to be</p>
          <p>around you</p>
        </div>

        <div className="mt-6 mb-5 border-2 border-gray-200 w-max m-auto px-16 py-3 cursor-pointer rounded-xl hover:bg-gradient-to-l hover:from-red-500 hover:to-yellow-500 transition-all duration-500 ease-in-out slide_right hover:text-black">
          <button>Let's Connect</button>
        </div>
      </div>
    </div>
  );
};
export default GetInTouch;
