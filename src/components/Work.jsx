import React from "react";
import WorkIm from '../assets/projects/workImg.jpeg'
import RealEst from '../assets/projects/realestate.jpg'
import MoveLand from "../assets/m.png";
import Portfolio from "../assets/p.png";

const Work = () => {
    return (
        <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">Work</p>
                    <p className="py-6">Check out some of my recent work</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Items */}
                    <div style={{backgroundImage: `url(${MoveLand})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                MovieLand
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://hasan-noaem.github.io/MovieLand/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/Hasan-Noaem/MovieLand">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${Portfolio})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Portfolio
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://hasan-noaem.github.io/portfolio-react.js/">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="https://github.com/Hasan-Noaem/portfolio-react.js">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WorkIm})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React.js ...
                            </span>
                            <div className="pt-8 text-center">
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${RealEst})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React.js ...
                            </span>
                            <div className="pt-8 text-center">
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${WorkIm})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React.js ...
                            </span>
                            <div className="pt-8 text-center">
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div style={{backgroundImage: `url(${RealEst})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
                        {/* Hover Effects */}
                        <div className="opacity-0 hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                React.js ...
                            </span>
                            <div className="pt-8 text-center">
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a href="#">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
        </div>
    );
}

export default Work;