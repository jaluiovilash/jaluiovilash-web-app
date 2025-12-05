import { ovidobi } from "../../assets/index";
import { VisitHere } from "../../components/index";
import { FadeContent } from "../../components/react-bits";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border-b">
      {/* Left Section */}
      <div className="flex justify-center items-center w-full md:w-2/5 border-b md:border-b-0 md:border-r p-8 md:p-10 bg-muted/10">
        <img
          src={ovidobi}
          alt="Ovilash"
          className="w-3/4 md:w-4/5 h-auto object-cover rounded-xl shadow-xl grayscale hover:grayscale-0 transition duration-500 ease-out"
        />
      </div>

      {/* Right Section */}
      <FadeContent blur duration={700} easing="ease-out" initialOpacity={0}>
        <div className="w-full md:w-[1000px] text-accent p-10 md:p-16 text-lg md:text-xl font-mono space-y-6 flex flex-col items-start justify-center">
          <p>
            Trust me, I’m still figuring out life — but the code runs perfectly.
          </p>

          <h1 className="text-xl md:text-2xl leading-snug font-semibold">
            Meet{" "}
            <a
              className="text-portfolio"
              href="https://www.instagram.com/jaluiovilash/"
              target="_blank"
            >
              Ovilash Jalui
            </a>{" "}
            — software engineer, systems thinker, and the guy who actually
            enjoys debugging{" "}
            <span className="text-yellow-100">(yes, those people exist)</span>.
          </h1>
          <br />
          <p>
            He builds products that are clean, fast, and quietly brilliant — the
            kind of interfaces that make you wonder why others overcomplicate
            everything. When he’s not architecting scalable systems, he’s
            experimenting, teaching, and shaping ideas that make tech feel
            simple, powerful, and a little more human.
          </p>
          <br />
          <p>
            In short: he writes code, solves problems, and occasionally
            surprises himself with how good the output looks.
          </p>

          <div className="pt-4 w-1/2 md:w-1/5">
            <a
              href="https://www.linkedin.com/in/jaluiovilash/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <VisitHere title="Say Hi!" />
            </a>
          </div>
        </div>
      </FadeContent>
    </div>
  );
};

export default Hero;
