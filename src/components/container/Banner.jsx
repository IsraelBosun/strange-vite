import { Link } from "react-router-dom"
import marcus from "../../assets/marcus.png"
const Banner = () => {
    return (
        <div>
                <header className='flex items-center justify-between space-x-2 font-bold'>
        <div className='flex items-center space-x-2'>
            <Link to = "/">
                <img src={marcus} alt="" className='w-8 h-8 rounded-full border border-blue-600 border-2 p-1' />
            </Link>
            <h1 className='text-xs xs:text-lg'>The Blog</h1>
        </div>

        <div>
            <Link to = "/contact" className='px-5 py-3 text-xs md:text-base bg-blue-600 text-white flex items-center rounded-full text-center'>Sign up to my newsletter</Link>
        </div>
    </header>
    <div className="flex flex-col sm:flex-row lg:space-x-5 justify-between items-center font-bold  mb-10">
            <div>
                <h1 className="text-6xl">Marcus Daily Blog</h1>
                <h2 className="mt-5 md:mt-8">
                    Welcome to {""}
                    <span className="underline decoration-4 decoration-blue-600">
                        Everyone's 
                    </span> {""}
                    Favourite blog in the world
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-blue-600 max-w-sm">
                New Health updates | The latest in entrepreneurship | The weekly helps
            </p>
        </div>
        </div>
    )
}

export default Banner;