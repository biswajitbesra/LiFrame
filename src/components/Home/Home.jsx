import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Home/Home.css'

function Home() {
    return (
        <section className="py-20 px-5 h-screen absolute top-0 w-screen flex justify-center items-center">
            <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight cus-web cursor-default">
                    Simplify Development with Tailored Utilities and Ready-to-Use Components
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl cursor-default">
                Create modern, responsive designs effortlessly with our utility-first framework. Plus, explore a library of pre-built components to speed up your workflow.
                </p>

                <div>
                    <NavLink to="/docs"
                        className="bg-black hover:bg-transparent text-white hover:text-black border hover:border-black font-semibold py-3 px-8 rounded-xl shadow-lg transition duration-300">
                        Get Started
                    </NavLink>
                </div>
            </div>
        </section>

    )
}

export default Home
