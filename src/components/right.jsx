import React, { useContext } from "react";
// import Project from "./project";
import Contact from "./contact";
import Skill from "./skills";
import Footer from "./footer";
import Projects_Section from "./Projects_Section";
import { motion } from "framer-motion";
import { GlobalContext } from "../context/contextApi";
// import Single_project from "./single-project";

const right = (props) => {
  const { hide, Sethide, handleSidebar } = useContext(GlobalContext);
  function scroll() {
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }
  function avs() {
    const link = "https://aligarian-s-visionary-classes-wakh.vercel.app/";
    window.open(link, "_blank");
  }

  function careSync() {
    const link = "https://caresync2-3.onrender.com";
    window.open(link, "_blank");
  }

  function gym() {
    const link = "https://gym-website-virid.vercel.app/";
    window.open(link, "_blank");
  }

  function UniUnity() {
    alert("This Website is under development");
  }

  function school() {
    alert("This Website is under development");
  }

  function survey() {
    const link = "https://survey-payu.vercel.app/";
    window.open(link, "_blank");
  }

  // Github Functions
  function avsg() {
    const link =
      "https://github.com/samar-abbas-786/Aligarian-s-Visionary-Classes";
    window.open(link, "_blank");
  }
  function caresyncg() {
    const link = "https://github.com/samar-abbas-786/CareSync2";
    window.open(link, "_blank");
  }
  function gymg() {
    const link = "https://github.com/samar-abbas-786/Gym-Website";
    window.open(link, "_blank");
  }
  function ug() {
    const link = "https://github.com/samar-abbas-786/UniUnity";
    window.open(link, "_blank");
  }
  function schg() {
    const link = "https://github.com/samar-abbas-786/MDE-school";
    window.open(link, "_blank");
  }
  function syg() {
    const link = "https://github.com/samar-abbas-786/SURVEY_PAYU";
    window.open(link, "_blank");
  }

  // function for links on left side

  function home() {
    const home = document.getElementById("home");
    if (home) {
      home.scrollIntoView({ behavior: "smooth" });
    }
  }

  function project() {
    const project = document.getElementById("project");
    if (project) {
      project.scrollIntoView({ behavior: "smooth" });
    }
  }

  function contact() {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }
  function skill() {
    const skill = document.getElementById("skill");
    if (skill) {
      skill.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div>
      <div className="main md:w-[75vw] w-100vw flex   justify-center flex-col  pt-5   ">
        <motion.h1
          id="Home"
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="text-2xl ml-8 md:ml-16"
        >
          Hello Everyone!👋
          <span
            onClick={() => handleSidebar()}
            className={`md:hidden ${
              hide === true ? "absolute" : "fixed"
            }  ml-60 text-white bg-black border-white border-2 px-2 `}
          >
            {hide ? "☰" : "X"}
          </span>
        </motion.h1>
        <br />
        <motion.h1
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="md:text-5xl text-3xl font-bold ml-8 md:ml-16 "
        >
          {" "}
          I'm SAMAR ABBAS
        </motion.h1>
        <motion.h1
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="md:text-2xl text-xl text-gray-600 font-serif mt-2 ml-8 md:ml-16"
        >
          Software Developer
        </motion.h1>
        <motion.p
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className=" write text-lg mt-6 ml-8 md:ml-16"
        >
          As a Mern Stack developer, my objective is to architect and develop
          high-quality web applications using{" "}
          <b className="text-stone-700">
            {" "}
            MongoDB, Express.js, React, and Node.js.
          </b>{" "}
          I aim to contribute my expertise to create seamless user experiences,
          drive business growth, and stay updated with the latest technologies.
          Let's build the future of web development together.
        </motion.p>
        <motion.div
          initial={{ x: 50 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.16 }}
          className="buttons  mt-8 md:w-1/3 w-[90vw] flex justify-between ml-8 md:ml-16 "
        >
          <button
            onClick={scroll}
            className=" border px-3  text-lg border-black  bg-black text-white hover:bg-neutral-700 rounded-sm h-[40px] w-auto"
          >
            Let's Connect
          </button>
          <button
            onClick={props.github}
            className=" border px-3 text-lg border-black hover:bg-black hover:text-white hover:ease-in-out hover:scale-105 duration-200 rounded-sm h-[40px] w-max"
          >
            Check Github
          </button>
        </motion.div>
        <div className="mt-24 ml-8 md:ml-16">
          <Projects_Section />
        </div>
        <div id="skill" className="mt-24 ml-8 md:ml-16">
          <Skill></Skill>
        </div>
        <div className="mt-24 ml-8 md:ml-16">
          <Contact></Contact>
        </div>
        <div className="mt-24 ">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default right;
// {isMobileMenuOpen === false ? "☰" : "X"}
