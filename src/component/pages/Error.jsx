import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="w-full h-screen bg-[#202124] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute w-[300px] h-[300px] bg-red-600 rounded-full top-[-50px] left-[-50px] opacity-30 animate-ping-slow"></div>
        <div className="absolute w-[200px] h-[200px] bg-red-800 rounded-full bottom-[-50px] right-[-50px] opacity-40 animate-ping-slow"></div>

        <h1 className="text-[6rem] sm:text-[10rem] font-bold text-red-600 drop-shadow-lg">404</h1>
        <h2 className="text-3xl md:text-4xl text-white font-semibold mt-4">Oops! Page not found</h2>
        <p className="text-red-400 mt-2 mb-6">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="px-6 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all duration-300">Go Back Home</Link>
      </div>
    </>
  );
}

export default Error;
