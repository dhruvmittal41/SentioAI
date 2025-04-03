import "./index.css";
import { default as img1 } from "./images/Proposal.png";
import { default as img2 } from "./images/human.png";
import { default as img3 } from "./images/funny.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-night w-screen">
        <div className="mx-auto p-5 ">
          <div className="relative flex h-16 items-center justify-between">
            <div className="inline-flex  items-center justify-center ">
              <h1 className="font-dancing  text-[80px] text-yellow-600">
                Sentio
              </h1>
              <div className="ml-10">
                <div className="flex space-x-2 hidden">
                  <a
                    href="#"
                    className="rounded-md bg-night3 px-3 py-2 text-sm font-medium text-white"
                    aria-current="page"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-night3 hover:text-white"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-night3 hover:text-white"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-night3 hover:text-white"
                  >
                    Calendar
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-[110px]">
                <button
                  onClick={() => navigate("/login")}
                  className="inline-flex items-center h-7 px-5 py-5  w-30  text-white hover:text-blue-500"
                >
                  <span>Log in</span>
                </button>
              </div>
              <div className="absolute top-0 right-0 mr-5">
                <button
                  onClick={() => navigate("/register")}
                  className="inline-flex items-center h-7 px-5 py-5  w-30  text-white rounded-[2vw] bg-black hover:opacity-55"
                >
                  <span>Sign Up</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="bg-gradient-to-b from-night via-night2  to-night3 w-screen flex-col ">
        <div className="inline-flex justify-between  w-screen">
          <div className="flex-col w-[100%] self-center text-white font-curvy  text-center ">
            <h1 className="font-bold text-[70px]">Are You Really Human?</h1>
            <p className="text-[35px]">We dont think So</p>
            <p className="text-[35px]">
              Check out how you perform for different situations!
            </p>
          </div>
          <img className=" w-[450px] h-[450px] mr-10" src={img2}></img>
        </div>
        <div className="inline-flex justify-between  w-screen">
          <img className=" w-[450px] h-[450px] mr-10 " src={img3}></img>
          <div className="flex-col w-[100%] self-center text-white font-curvy  text-center ">
            <h1 className="font-bold text-[70px]">Are You Really Funny?</h1>
            <p className="text-[35px]">We bet you cant crack us up </p>
            <p className="text-[35px]">Try it yourself!</p>
          </div>
        </div>
        <div className="inline-flex justify-between  w-screen">
          <div className="flex-col w-[100%] self-center text-white font-curvy  text-center ">
            <h1 className="font-bold text-[70px]">Wanna Propose?</h1>
            <p className="text-[35px]">But not sure how it might turn out</p>
            <p className="text-[35px]">
              Dont Worry! hit us with your best lines!
            </p>
          </div>
          <img className=" w-[450px] h-[450px] mr-10" src={img1}></img>
        </div>
      </div>
    </>
  );
};

export default Hero;
