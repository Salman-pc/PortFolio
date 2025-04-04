import React from 'react';
import resume from '../assets/resume.pdf'
import { useState, useEffect } from "react";
import { motion } from 'framer-motion';

function Home() {

  const textArray = ["Frontent Developer", "Backend Developer", "Full Stack Developer"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);

  useEffect(() => {
    const handleAnimation = () => {
      if (isRemoving) {
        // Remove letters one by one
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsRemoving(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length); // Move to the next text
        }
      } else {
        // Add letters one by one
        setCurrentText((prev) =>
          textArray[index].slice(0, prev.length + 1)
        );
        if (currentText === textArray[index]) {
          setTimeout(() => setIsRemoving(true), 2000); // Pause before removing
        }
      }
    };
    const interval = setInterval(handleAnimation, 100); // Speed of adding/removing letters
    return () => clearInterval(interval);
  }, [currentText, isRemoving, index, textArray]);


  return (
    <div className=' container mx-auto mt-4 border-[3px] border-gray-600 rounded-lg max-w-screen-xl px-3 py-8 mb-3'>
      <div className=" text-white h-[100%] flex flex-col ">
        <div className="container w-full px-4 flex flex-col md:flex-row items-center md:justify-between">
          {/* Left Section */}
          <div className="md:w-8/12  lg:w-7/12 md:text-left">
            <div className="md:text-xl sm:text-md text-gray-400">

              <div className="sm:text-2xl text-[23px]  font-semibold mt-4">
                I'm a{" "}
                <span className="text-orange-400">
                  {currentText}
                  <span className="blinking-cursor">|</span>
                </span>
              </div>
            </div>

            <h1 className="md:text-5xl text-4xl font-bold mt-4">
              Hi I'M <span className="text-orange-400 md:text-5xl text-3xl">MOHAMMAD SALMAN</span>
            </h1>
            <div className=" text-gray-400 my-10 ">
              <p className="scrolling-text lg:mr-16">
                I am a passionate and dedicated MERN stack developer with expertise in building responsive, scalable, and user-friendly web applications. I specialize in utilizing MongoDB, Express.js, React, and Node.js to deliver innovative solutions tailored to meet specific client and user needs. My goal is to continuously learn, adapt, and leverage my skills to contribute effectively to the ever-evolving world of technology
              </p>
            </div>
            <div className="mt-6 flex items-center flex-row justify-start space-x-3">
              <div>
                <motion.a
                  whileTap={{ scale: .8 }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5, ease: 'easeOut', delay: .1 }}
                  download="Resume.pdf"
                  href={resume}
                  className="bg-transparent border-2 max-w-fit hover:border-orange-500 border-gray-600 text-orange-400 hover:bg-orange-500 hover:text-black md:px-6 px-3 py-2 rounded-lg flex items-center space-x-2 transition"
                >
                  <span className='lg:text-md text-sm'>Download CV</span>
                  <i className="fas fa-download"></i>
                </motion.a>
              </div>

              <div className='flex gap-4  sm:mt-0'>
                <a
                  href="https://github.com/Salman-pc?tab=repositories"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="GitHub"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://x.com/m_salman_pc"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="Twitter"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/m_salman_pc/?hl=en"
                  target='_blank'
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/mohammad-salman-pc/"
                  className="text-orange-400 hover:text-orange-500 text-2xl transition"
                  title="LinkedIn"
                  target='_blank'
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className=" hidden md:flex justify-center m-auto w-3/12 ">
            <div className="w-full lg:mx-5 shadow-lg   rounded-md h-[230px]">
              <img
                
                
                alt="salman"
                className="w-full h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
