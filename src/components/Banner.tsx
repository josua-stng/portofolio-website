import { useEffect, useState } from 'react';
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ['Web Developer', 'Web Designer', 'Team Leader'];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };
  return (
    <div className="flex-col md:flex md:flex-row justify-center items-center md:justify-between md:items-center bg-[url('/img/banner-bg.png')] h-[700px] md:h-[550px] bg-cover overflow-hidden">
      <div className='text-slate-300 px-10 flex flex-col items-center md:block'>
        <p className="border-2 border-gray-200 rounded-lg w-max px-5 py-2 bg-[url('/img/banner-bg.png')] mt-10 md:mt-0">Welcome to my Portfolio</p>
        <h1 className="text-3xl mt-5 font-mono font-bold mb-5">
          {`Hi! I'm Josua`}{' '}
          <span
            className="txt-rotate"
            data-period="1000"
            data-rotate='[ "Web Developer", "Web Designer", "Team Leder" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <div className='max-w-lg'>
          <p>
            Hi my name is Josua. I'm from Indonesia and now I'm 20 years old
            year. I study at Mikroskil University. I started my journey in
            programming as a front-end developer and able to create interactive
            and interesting website.
          </p>
        </div>
      </div>
      <div className="max-w-xs mx-auto md:mx-0">
        <img src='/img/header-img.png' alt="image_banner" className='animate-updown ml-5'/>
      </div>
    </div>
  );
};
export default Banner;
