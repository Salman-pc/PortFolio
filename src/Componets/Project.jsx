import React from 'react'

import { Link } from 'react-router-dom'
import music from '../assets/music.jpg'
import project_fair from '../assets/project_fair.png'
import shopping_cart from '../assets/shopping_cart.jpg'
import { motion } from 'framer-motion'
import construction from '../assets/construction.webp'

function Project() {
    return (
        <div

        >
            <div className="container max-w-screen-xl h-[100%] border-[3px] border-gray-600 rounded-lg mx-auto px-6 pb-16 pt-6 mb-3">

                <h1 className="md:text-3xl text-2xl w-full font-bold text-left mb-8">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ">


                    {/* --- constructo --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                                <div className="w-full h-full shadow-md">
                                    <img
                                        src={construction}
                                        alt="Restaurant App Project Screenshot"
                                        className="w-full h-full object-cover rounded-md mb-4"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                                <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                    <a
                                        target='_blank'
                                        href="https://github.com/Salman-pc/Cunstructo"
                                        className="bg-gray-700 shadow-lg hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* GitHub Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent text-orange-400"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                        </svg>
                                    </a>
                                    <a
                                        target='_blank'
                                        href="https://cunstructo.vercel.app/"
                                        className="bg-gray-700 shadow-lg border-gray-500 hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* Live Demo Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full sm:w-1/2 md:w-full">
                                <h2 className="lg:text-2xl text-xl font-semibold mb-4">Constructo</h2>
                                <div className="relative w-full shadow-md rounded-md mb-4 border border-gray-600">
                                    <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                        <p className='w-full text-center items-center bold text-2xl flex justify-center h-full'>Coming soon.....!!</p>
                                        <p className="mt-2"></p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                            </div>
                        </div>
                        {/* Tech Used for Restaurant App */}
                        <div className='md:mt-2'>
                            <div className="flex lg:gap-2 flex-wrap gap-2 overflow-x-scroll no-scrollbar">
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">React</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Tailwind CSS</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Socket Io</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">MERN</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* --- E-Cart Card --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                                <div className="w-full h-full shadow-md">
                                    <img
                                        src={shopping_cart}
                                        alt="E-Cart Project Screenshot"
                                        className="w-full h-full object-cover rounded-md mb-4"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                                <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                    <a
                                        target='_blank'
                                        href="https://github.com/Salman-pc/E-Cart"
                                        className="bg-gray-700 shadow-lg hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* GitHub Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent text-orange-400"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                        </svg>
                                    </a>
                                    <a
                                        target='_blank'
                                        href="https://e-cart-delta-taupe.vercel.app/"
                                        className="bg-gray-700 shadow-lg border-gray-500 hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* Live Demo Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full sm:w-1/2 md:w-full">
                                <h2 className="lg:text-2xl text-xl font-semibold mb-4">E-Cart</h2>
                                <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                    <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                        <p>
                                            Ecat is a responsive e-commerce platform that lets users browse a wide variety of products, add them to their shopping cart, and complete secure checkouts. The app is designed with a modern and intuitive interface using React.js and Bootstrap, ensuring a seamless experience on both desktop and mobile devices.
                                        </p>
                                        <p className="mt-2">
                                            State management is handled using Redux, making it easy to manage user actions and maintain a consistent experience across the app. The platform communicates with a RESTful API to manage product listings and user transactions. This setup ensures smooth functionality and a reliable shopping experience, providing users with everything they need in one place.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                            </div>
                        </div>
                        {/* Tech Used for E-Cart */}
                        <div className='md:mt-2'>
                            <div className="flex lg:gap-2  gap-2 overflow-x-scroll no-scrollbar">
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 whitespace-nowrap rounded-full">React</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 whitespace-nowrap rounded-full">Bootstrap</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 whitespace-nowrap rounded-full">Redux</span>

                            </div>
                        </div>
                    </motion.div>

                    {/* --- Media Player Card --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                                <div className="w-full h-full shadow-md">
                                    <img
                                        src={music}
                                        alt="Media Player Project Screenshot"
                                        className="w-full h-full object-cover rounded-md mb-4"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                                <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                    <a
                                        target='_blank'
                                        href="https://github.com/Salman-pc/MeadiaPlayer"
                                        className="bg-gray-700 shadow-lg hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* GitHub Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent text-orange-400"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                        </svg>
                                    </a>
                                    <a
                                        target='_blank'
                                        href="https://meadia-player-lyart.vercel.app/"
                                        className="bg-gray-700 shadow-lg border-gray-500 hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* Live Demo Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full sm:w-1/2 md:w-full">
                                <h2 className="lg:text-2xl text-xl font-semibold mb-4">Media Player</h2>
                                <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                    <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                        <p>
                                            The Media Player App is a front-end web application designed for seamless audio and video streaming. It features dynamic playlists, search functionality, and intuitive playback controls, providing users with an effortless way to manage and enjoy their media. The app ensures smooth and responsive performance across various devices, delivering high-quality playback for both audio and video content.
                                        </p>
                                        <p className="mt-2">
                                            Built with React and styled using Tailwind CSS, the app uses a JSON Server to handle and store data. This setup allows for efficient management of media content without the complexity of a backend, providing a simple and effective solution for content storage. The application focuses on delivering a high-quality user experience with intuitive controls and responsive design.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                            </div>
                        </div>
                        {/* Tech Used for Media Player */}

                        <div className="md:mt-2">
                            <div className="flex lg:gap-2 gap-2 overflow-x-scroll no-scrollbar">
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">React</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">Bootstrap</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">Nodejs</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">JSON Database</span>
                            </div>
                        </div>



                    </motion.div>

                    {/* --- Project Fair --- */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                        className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                        <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                            {/* Image Section */}
                            <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                                <div className="w-full h-full shadow-md">
                                    <img
                                        src={project_fair}
                                        alt="Restaurant App Project Screenshot"
                                        className="w-full h-full object-cover rounded-md mb-4"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                                <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                    <a
                                        target='_blank'
                                        href="https://github.com/Salman-pc/project_fair"
                                        className="bg-gray-700 shadow-lg hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* GitHub Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent text-orange-400"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                                        </svg>
                                    </a>
                                    <a
                                        target='_blank'
                                        href="https://project-fair-phi-seven.vercel.app/"
                                        className="bg-gray-700 shadow-lg border-gray-500 hover:bg-gray-800 text-xs px-3 py-2 rounded-lg"
                                    >
                                        {/* Live Demo Icon */}
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="bg-transparent"
                                            height="22"
                                            width="22"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ color: "#FB923C" }}
                                        >
                                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"></path>
                                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 w-full sm:w-1/2 md:w-full">
                                <h2 className="lg:text-2xl text-xl font-semibold mb-4">PROJECT FAIR</h2>
                                <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                    <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                        <p>
                                            Project Fair is a dedicated platform that allows developers and tech enthusiasts to present their projects in a structured and professional manner. It provides an intuitive interface where users can upload their work, describe their projects, and highlight key technologies used.
                                        </p>
                                        <p className="mt-2">
                                            Built with React.js for the frontend and Node.js/Express.js for the backend, Project Fair ensures a smooth and responsive user experience. MongoDB is used for data storage, allowing efficient management of user projects. The platform also includes user authentication via JSON Web Tokens (JWT) for secure access and profile management.
                                        </p>
                                        <p className="mt-2">
                                            One of the core features of Project Fair is its project listing and categorization system, which enables users to browse projects based on technologies and categories. Additionally, users can add images, detailed descriptions, and relevant links to enhance their project presentations.
                                        </p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                                </div>
                            </div>
                        </div>
                        {/* Tech Used for Restaurant App */}
                        <div className='md:mt-2'>
                            <div className="flex lg:gap-2 flex-wrap gap-2 overflow-x-scroll no-scrollbar">
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">React</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Bootstrap</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Mongo DB</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Express</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Node js</span>
                                <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">ContextAPI</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
                {/* more projects button*/}
                <div className="relative my-5  bottom-1">
                    <Link to="/projects">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="flex absolute right-0 gap-3 justify-center items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-200 shadow-md">
                            <span>More</span>
                            <i className="fa-solid fa-arrow-right"></i>
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project
