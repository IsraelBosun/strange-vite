import React from 'react';
import image from "../../assets/marcus.jpeg";
import { Link } from "react-router-dom"
import "./styles.css";

const MeetMe = () => {
    return (
        <section className='relative pt-10'>
            <div className="parallax"></div>
            <div className="absolute section flex flex-col gap-3 inset-0 flex flex-start items-left justify-center">
                <p className='text-2xl text-blue-600 font-bold'>Do you wish to speak with me?</p>
                <p className='text-black text-lg'>Click the button below</p>
                <Link to="/contact"> <button className='bg-blue-600 rounded-xl px-1 py-3 text-white w-[150px] hover:text-blue-600 hover:bg-white'>Get in touch</button></Link>
            </div>
        </section>
    );
};

export default MeetMe;
