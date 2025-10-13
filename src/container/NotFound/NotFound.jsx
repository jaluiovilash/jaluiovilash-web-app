import { notfound } from "../../assets/index";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-6">
      <h1 className="text-8xl font-extrabold text-red-500 mb-4">404</h1>
      <p className="text-2xl mb-6">
        Oops! Looks like this page went on vacation 🌴
      </p>

      {/* Replace the src with your meme PNG later */}
      <img
        src={notfound}
        alt="Funny meme"
        className="w-64 md:w-96 mb-6 rounded-lg shadow-lg"
      />

      <a
        href="/"
        className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:text-white transition"
      >
        Go back home
      </a>
    </div>
  );
};

export default NotFound;
