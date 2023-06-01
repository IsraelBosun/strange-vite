import React from 'react'
import icon from "../../assets/check.png"


const Subscribe = () => {
    return (
        <div className='bg-[#151B28] text-white mb-7'>
            <div className='section flex flex-col items-center justify-center gap-4 '>
                <p className='text-blue-600 capitalize'>if you want to keep hearing from me</p>
                <p className='text-xl font-bolf text-center'>Subscribe to my newsletter</p>
                <form action="" className='sm-w-full xs:w-[1/2] flex  flex-col xs:flex-row  items-center space-y-2  '>
                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="Enter your email address" className='rounded-tl-md rounded-bl-md  py-2 px-3 ' required />
                    <button type="submit" className=' rounded-tr-md rounded-br-md py-2 px-3 bg-blue-800 xs-mt-2 sm-mt-0 text-white'>Subscribe</button>
                </form>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 p-3'>
                    <div className='flex items-center justify-center gap-2'>
                        <div><img src={icon} className='w-[150%]' alt="" /></div>
                        <p>Fully Secure</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div><img src={icon} className='w-[150%]' alt="" /></div>
                        <p>No Spamming</p>
                    </div>
                    <div className='flex items-center justify-center gap-2'>
                        <div><img src={icon} className='w-[150%]' alt="" /></div>
                        <p>No Kidding</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscribe