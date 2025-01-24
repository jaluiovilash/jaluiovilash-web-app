const MaintenancePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-black-100 to-black-300">
      <div className="max-w-md p-8 text-center bg-white md:rounded-2xl shadow-xl">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m0 4h-.01M12 8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
          Oops! Page Not Found
        </h1>

        {/* 404 Image */}
        <div className="flex justify-center mb-6">
          <img
            src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?t=st=1737698544~exp=1737702144~hmac=536716466bcaeef895de4938c7466adc12774835c5619a6ea33529c234beac6d&w=740"
            alt="404 Not Found"
            className="w-auto h-46 object-contain"
          />
        </div>

        {/* Message */}
        <p className="text-gray-600 leading-relaxed mb-6">
          Our website is getting some love and care to serve you better. Thank
          you for your patience — we’ll be back shortly!
        </p>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <a
            href="/contact"
            className="px-6 py-2 text-white hover:text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
          <a
            href="/"
            className="px-6 py-2 text-gray-700 hover:text-gray-700 bg-gray-200 rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
