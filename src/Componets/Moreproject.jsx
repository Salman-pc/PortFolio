import React from 'react';
import restuarent_food from '../assets/restuarent_food.webp'
import bmwcar from '../assets/bmwcar.jpg'
import iphone from '../assets/iphone.png'
import swiggy from '../assets/Swiggy.jpg';
import { motion } from 'framer-motion'

const Moreproject = () => {
    return (
        <div className="container max-w-screen-xl mx-auto px-6 py-16 mb-5">

            <h1 className="md:text-3xl text-2xl w-full font-bold text-left mb-8">Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-6">

                {/* --- Restaurant --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                    className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                        {/* Image Section */}
                        <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                            <div className="w-full h-full shadow-md">
                                <img
                                    src={restuarent_food}
                                    alt="Restaurant App Project Screenshot"
                                    className="w-full h-full object-cover rounded-md mb-4"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                            <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                <a
                                    target='_blank'
                                    href="https://github.com/Salman-pc/Restaurant-app"
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
                                    href="https://salman-pc.github.io/Restaurant-app"
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
                            <h2 className="lg:text-2xl text-xl font-semibold mb-4">Restaurant App</h2>
                            <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                    <p>
                                        The Restaurant App is a front-end web application designed to provide a seamless food ordering and reservation experience. It features an intuitive interface where users can browse menus, place orders, and manage reservations easily. The app also includes real-time order tracking, ensuring a smooth and efficient experience for customers.
                                    </p>
                                    <p className="mt-2">
                                        Built with React and styled using Tailwind CSS, the front-end offers a modern and fully responsive design. The Context API is utilized for state management, enabling efficient data handling and smooth user interactions. This project focuses on performance, accessibility, and user convenience, offering a user-friendly and efficient online food ordering experience.
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
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Tailwind CSS</span>
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">scss</span>
                        </div>
                    </div>
                </motion.div>


                {/* --- iphone website--- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                    className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                        {/* Image Section */}
                        <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                            <div className="w-full h-full shadow-md">
                                <img
                                    src={iphone}
                                    alt="Restaurant App Project Screenshot"
                                    className="w-full h-full object-cover rounded-md mb-4"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                            <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                <a
                                    target='_blank'
                                    href="https://github.com/Salman-pc/iPhone-ind-_clone"
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
                                    href="https://i-phone-ind-clone-qrg0wz5kj-salman-pcs-projects.vercel.app/"
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
                            <h2 className="lg:text-2xl text-xl font-semibold mb-4">iPhone India_Clone</h2>
                            <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                    <p>
                                        The iPhone India Clone is a front-end web project designed to replicate the official Apple India website, focusing on delivering a premium user experience similar to the original. The project presents a clean and modern design, showcasing iPhone models, features, and specifications. Users can explore various iPhone options, accessories, and more, with a smooth and interactive layout that mimics the design aesthetics of Apple’s official website.
                                    </p>
                                    <p className="mt-2">
                                        Built using HTML, Bootstrap, and CSS, this project leverages Bootstrap's responsive grid system to create a flexible layout that adapts seamlessly across devices. CSS is used for custom styling to match the branding and visual identity of Apple. The use of Bootstrap components such as navigation bars, carousels, and buttons enhances the functionality and design consistency, while ensuring an intuitive and responsive interface across various screen sizes. This clone project highlights proficiency in front-end development and the ability to create responsive, user-friendly websites using widely-used web technologies.
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
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Tailwind CSS</span>
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">scss</span>
                        </div>
                    </div>
                </motion.div>

                {/* --- BMW website --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} viewport={{ once: true }}
                    className="bg-gray-800 rounded-xl shadow-lg p-6 transition-transform duration-300">
                    <div className="flex flex-col lg:flex-row sm:flex-row md:flex-col items-start gap-4">
                        {/* Image Section */}
                        <div className="relative lg:w-1/2 sm:w-1/2 md:w-full lg:h-[300px] md:h-[200px] sm:h-[270px] h-[170px] w-full">
                            <div className="w-full h-full shadow-md">
                                <img
                                    src={bmwcar}
                                    alt="Restaurant App Project Screenshot"
                                    className="w-full h-full object-cover rounded-md mb-4"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                            <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                <a
                                    target='_blank'
                                    href="https://github.com/Salman-pc/Bmw-ind-_clone"
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
                                    href="https://bmw-ind-clone.vercel.app/"
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
                            <h2 className="lg:text-2xl text-xl font-semibold mb-4">BMW_Clone</h2>
                            <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                    <p>
                                        The BMW India Clone is a front-end web project designed to replicate the official BMW India website, focusing on user-friendly design and seamless navigation. This project showcases an elegant interface that highlights BMW’s luxury cars, allowing users to explore various models, specifications, and features. With a sleek and professional layout, the website ensures an engaging browsing experience that aligns with the premium brand identity of BMW.
                                    </p>
                                    <p className="mt-2">
                                        Developed using HTML, CSS, and CSS Media Queries, this project emphasizes responsive design to ensure compatibility across different devices, including desktops, tablets, and mobile phones. The use of CSS Flexbox and Grid provides a well-structured layout, while media queries optimize the design for various screen sizes. This project serves as a demonstration of strong front-end development skills, attention to detail, and the ability to create visually appealing, high-quality web interfaces.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                        </div>
                    </div>
                    {/* Tech Used for Restaurant App */}
                    <div className='md:mt-2'>
                        <div className="flex lg:gap-2 flex-wrap gap-2 overflow-x-scroll no-scrollbar">
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">HTML</span>
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Meadia quary</span>
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 whitespace-nowrap py-2 rounded-full">Java Script</span>
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
                                    src={swiggy}
                                    alt="Media Player Project Screenshot"
                                    className="w-full h-full object-cover rounded-md mb-4"
                                />
                                <div className="absolute bottom-0 left-0 w-full h-[77.5%] bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                            <div className="absolute bottom-[10px] right-2 gap-3 flex items-center">
                                <a
                                    target='_blank'
                                    href="https://github.com/Salman-pc/Swigy"
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
                                    href="https://swigy-three.vercel.app/"
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
                            <h2 className="lg:text-2xl text-xl font-semibold mb-4">Swigy_clone</h2>
                            <div className="relative w-fit shadow-md rounded-md mb-4 border border-gray-600">
                                <div className="overflow-y-auto lg:h-[250px] h-32 md:h-44 sm:h-56 text-gray-400 p-2 scrollbar-hide">
                                    <p>
                                        The Swiggy Clone is a front-end web project designed to replicate the interface of the Swiggy food delivery website. It features a structured layout with restaurant listings, banners, and a clean design that closely resembles the original platform. The website provides a static visual representation of Swiggy’s homepage, ensuring an engaging user interface.
                                    </p>
                                    <p className="mt-2">
                                        Developed using HTML and CSS, this project does not include media queries, meaning it is not responsive across different screen sizes. The layout is fixed, making it more suitable for desktop viewing rather than adapting to mobile or tablet screens. Despite the lack of responsiveness, the project effectively demonstrates front-end development skills by accurately replicating Swiggy’s design using core web technologies.
                                    </p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-[37.5%] bg-gradient-to-t from-gray-800 to-transparent pointer-events-none rounded-b-md"></div>
                            </div>
                        </div>
                    </div>
                    {/* Tech Used for Media Player */}

                    <div className="md:mt-2">
                        <div className="flex lg:gap-2 gap-2 overflow-x-scroll no-scrollbar">
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">HTML 5</span>
                            <span className="bg-gray-700 shadow-sm border border-gray-500 text-xs px-3 py-2 rounded-full whitespace-nowrap">CSS</span>

                        </div>
                    </div>



                </motion.div>

            </div>

        </div>
    );
};

export default Moreproject;
