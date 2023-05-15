import dataProject from '../data/ProjectData.json';
import 'animate.css';
const Project = () => {
  const sliceProject = dataProject.slice(0, 3);
  return (
    <div className="bg-zinc-800 text-white  animate__animated animate__fadeInDown">
      <div className="text-center pt-10 pb-10">
        <p className="text-xl sm:text-3xl font-mono pb-3 font-bold">Projects</p>
        <p className="px-5">
          I show you to all the big and small websites I have done so far I show
          you to all the big and small websites I have done so far
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 px-10 justify-center items-center gap-10 pb-5 ">
        {sliceProject.map((projects) => {
          return (
            <div
              key={projects.id}
              className="text-center border-2 border-gray-600 p-5 font-serif h-50 rounded-xl cursor-pointer hover:translate-y-[-10px]"
            >
              <p className="md:text-xl mb-3 ">{projects.projectName}</p>
              <img
                src={projects.image}
                alt="image_project"
                className="object-cover md:object-contain  w-full mx-auto rounded-lg"
              />
            </div>
          );
        })}
      </div>
      <p className="text-center pb-5 cursor-pointer font-mono">
        View More {'>'}
      </p>
    </div>
  );
};
export default Project;
