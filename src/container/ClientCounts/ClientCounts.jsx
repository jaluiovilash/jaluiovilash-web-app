import { CountUp } from "../../components/react-bits/index";

const ClientCounts = () => {
  return (
    <div className="text-center py-20 border-b font-montserrat">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-4/5 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-semibold text-4xl md:text-6xl">
            <CountUp
              from={0}
              to={15}
              separator=","
              direction="up"
              duration={1}
              className="text-5xl md:text-7xl font-base"
            />
            <span className="ml-1">+</span>
          </div>
          <p className="text-[#9B9B9B] text-xl mt-3 md:block hidden">
            Projects Delivered
          </p>
          <p className="text-[#9B9B9B] text-xl mt-3 md:hidden block">
            Projects
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-semibold text-4xl md:text-6xl">
            <CountUp
              from={700}
              to={3000}
              separator=","
              direction="up"
              duration={1}
              className="text-5xl md:text-7xl font-base"
            />
            <span className="ml-1">+</span>
          </div>
          <p className="text-[#9B9B9B] text-xl mt-3 md:block hidden">
            Hours Spent on Work
          </p>
          <p className="text-[#9B9B9B] text-xl mt-3 md:hidden block">Hours</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-semibold text-4xl md:text-6xl">
            <CountUp
              from={0}
              to={14}
              separator=","
              direction="up"
              duration={1}
              className="text-5xl md:text-7xl font-base"
            />
            <span className="ml-1">+</span>
          </div>
          <p className="text-[#9B9B9B] text-xl mt-3 md:block hidden">
            Happy Clients
          </p>
          <p className="text-[#9B9B9B] text-xl mt-3 md:hidden block">Clients</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-center items-center font-semibold text-4xl md:text-6xl">
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1}
              className="text-5xl md:text-7xl font-base"
            />
            <span className="ml-1">+</span>
          </div>
          <p className="text-[#9B9B9B] text-xl mt-3 md:block hidden">
            Technologies Explored
          </p>
          <p className="text-[#9B9B9B] text-xl mt-3 md:hidden block">
            Technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientCounts;
