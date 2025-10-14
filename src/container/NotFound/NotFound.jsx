import { notfound } from "../../assets/index";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8 bg-black transition-colors duration-300">
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-red-500 mb-4">
        404
      </h1>

      <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
        Oops! Looks like this page went on vacation 🌴
      </p>

      <img
        src={notfound}
        alt="Funny meme"
        className="w-48 sm:w-64 md:w-80 lg:w-96 mb-6 rounded-lg shadow-lg object-contain"
      />

      <a
        href="/"
        className="px-5 sm:px-6 py-3 bg-portfolio text-white font-semibold rounded-lg hover:text-white transition duration-300 shadow-md"
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
