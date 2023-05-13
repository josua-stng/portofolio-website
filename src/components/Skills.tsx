import SkillsData from '../data/SkillsData.json'

const Skills =() =>{
    return(
        <div className="text-white m-5 rounded-lg lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-md    QQQ mx-auto">
            <div className='bg-gray-800  rounded-3xl px-5'>
                <h1 className='text-center pt-10 pb-0 text-xl sm:text-3xl font-mono font-bold'>About Skills</h1>
                <div className='grid justify-center sm:grid-cols-2 md: md:grid-cols-3 lg:grid-cols-4 items-center gap-7 lg:gap-0 md:gap-0 p-5'>
                    {SkillsData.map((skills)=>{
                        return(
                            <div key={skills.id} className='flex border-2 mx-auto items-center rounded-lg border-gray-600 w-60 md:w-52 md:m-5 py-5 mb-2' >
                                <img src={skills.image} alt="" className='w-10 ml-5' />
                                <p className='ml-2'>{skills.name}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
           </div>
    )
}
export default Skills