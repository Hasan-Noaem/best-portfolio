import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Skills = () => {
    return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={HTML} alt="html" />
                    <p className="my-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={CSS} alt="css" />
                    <p className="my-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={JavaScript} alt="js" />
                    <p className="my-4">JavaScript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={ReactImg} alt="react" />
                    <p className="my-4">React.js</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={GitHub} alt="github" />
                    <p className="my-4">GitHub</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={Node} alt="node" />
                    <p className="my-4">Node.js</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={Mongo} alt="mongo" />
                    <p className="my-4">Mongo</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto pt-5" src={Tailwind} alt="tailwind" />
                    <p className="my-4">Tailwind</p>
                </div>
            </div>

        </div>
    </div>
    );
}

export default Skills;