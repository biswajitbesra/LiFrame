import React from 'react'

function Overflow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Overflow</h1>
            <p className="mb-4">The <span className="font-semibold">overflow</span> property in CSS controls what happens to content that is larger than its container. LiFrame provides utilities for managing both horizontal and vertical overflow, helping you handle scrolling or hiding of overflowing content effectively. These utilities can be applied to create responsive and interactive designs.</p>
            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='sticky top-0 w-full bg-primary'>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: scroll;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: scroll;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: scroll;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow Visible</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-visible</span> utility to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.</p>
                    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-5 rounded-lg shadow-lg relative mb-5">
                        <h2 className="font-semibold text-xl mb-4 text-gray-800">Overflow Visible: Blooming Flowers</h2>
                        <div className="w-full h-40 bg-white overflow-visible rounded-lg relative flex items-center justify-center">
                            {/* <!-- Flower Base --> */}
                            <div className="w-24 h-24 bg-yellow-300 rounded-full"></div>
                            {/* <!-- Petals Overflowing --> */}
                            <div className="absolute w-20 h-20 bg-pink-400 rounded-full top-[-20px] left-[50%] translate-x-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-500 rounded-full top-[50%] left-[-20px] translate-y-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-400 rounded-full top-[50%] right-[-20px] translate-y-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-500 rounded-full bottom-[-20px] left-[50%] translate-x-[-50%]"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-visible</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow Hidden</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-hidden</span> utility to clip any content within an element that overflows the bounds of that element.</p>
                    <div className="bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 p-5 rounded-lg shadow-lg relative mb-5">
                        <h2 className="font-semibold text-xl mb-4 text-gray-800">Overflow Visible: Blooming Flowers</h2>
                        <div className="w-full h-40 bg-white overflow-hidden rounded-lg relative flex items-center justify-center">
                            {/* <!-- Flower Base --> */}
                            <div className="w-24 h-24 bg-yellow-300 rounded-full"></div>
                            {/* <!-- Petals Overflowing --> */}
                            <div className="absolute w-20 h-20 bg-pink-400 rounded-full top-[-20px] left-[50%] translate-x-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-500 rounded-full top-[50%] left-[-20px] translate-y-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-400 rounded-full top-[50%] right-[-20px] translate-y-[-50%]"></div>
                            <div className="absolute w-20 h-20 bg-pink-500 rounded-full bottom-[-20px] left-[50%] translate-x-[-50%]"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-hidden</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>

                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow Auto</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-auto</span> utility to add scrollbars to an element in the event that its content overflows the bounds of that element. Unlike <span className="font-semibold">overflow-scroll</span>, which always shows scrollbars, this utility will only show them if scrolling is necessary.</p>
                    <div className="overflow-auto max-w-sm mx-auto h-60 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-t from-blue-50 to-blue-100 mb-5">
                        <div className="space-y-3 p-4">
                            <div className="h-16 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-teal-200 via-green-300 to-yellow-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-red-200 via-orange-300 to-yellow-500 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-auto</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow x auto</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-x-auto</span> utility to allow horizontal scrolling if needed.</p>
                    <div className=" border border-gray-300 rounded-lg shadow-md bg-gradient-to-b from-green-50 to-green-200 mb-5">
                        <div className="flex gap-3 p-4 overflow-x-auto max-w-full">
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-yellow-200 via-orange-300 to-red-400 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-teal-200 via-green-300 to-blue-500 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-500 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-500 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-purple-200 via-indigo-300 to-blue-500 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-cyan-200 via-blue-300 to-indigo-500 rounded-lg shadow-md"></div>
                            <div className="flex-none w-40 h-32 bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-x-auto</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow y auto</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-y-auto</span> utility to allow vertical scrolling if needed.</p>
                    <div className="overflow-y-auto max-w-sm mx-auto h-60 border border-gray-300 rounded-lg shadow-lg bg-gradient-to-t from-blue-50 to-blue-100 mb-5">
                        <div className="space-y-3 p-4">
                            <div className="h-16 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-teal-200 via-green-300 to-yellow-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-red-200 via-orange-300 to-yellow-500 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-gray-300 to-gray-500 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-pink-200 via-purple-300 to-indigo-400 rounded-md"></div>
                            <div className="h-16 bg-gradient-to-r from-cyan-300 to-blue-500 rounded-md"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-y-auto</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Overflow x scroll</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-x-scroll</span> utility to allow horizontal scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.</p>
                    <div class="overflow-x-scroll max-w-full h-64 bg-gradient-to-b from-gray-200 to-gray-50 rounded-2xl shadow-lg p-4 border border-gray-300 mb-5">
                        <div class="flex space-x-6 w-[120%]">
                            <div class="w-48 h-48 bg-gradient-to-r from-rose-400 to-red-500 rounded-full shadow-md"></div>
                            <div class="w-48 h-48 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg shadow-md"></div>
                            <div class="w-48 h-48 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl shadow-md"></div>
                            <div class="w-48 h-48 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl shadow-md"></div>
                            <div class="w-48 h-48 bg-gradient-to-r from-blue-400 to-sky-500 rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-x-scroll</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                <h6 className="font-bold text-lg mb-2">Overflow y scroll</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-y-scroll</span> utility to allow vertical scrolling and always show scrollbars unless always-visible scrollbars are disabled by the operating system.</p>
                    <div class="overflow-y-scroll max-h-64 max-w-sm mx-auto bg-gradient-to-r from-gray-50 via-gray-200 to-gray-50 rounded-2xl shadow-xl border border-gray-300 p-4 mb-5">
                        <div class="space-y-6">
                            <div class="h-16 w-full bg-gradient-to-b from-blue-400 to-indigo-500 rounded-lg shadow-md"></div>
                            <div class="h-16 w-full bg-gradient-to-b from-green-400 to-teal-500 rounded-lg shadow-md"></div>
                            <div class="h-16 w-full bg-gradient-to-b from-yellow-400 to-orange-500 rounded-lg shadow-md"></div>
                            <div class="h-16 w-full bg-gradient-to-b from-pink-400 to-red-500 rounded-lg shadow-md"></div>
                            <div class="h-16 w-full bg-gradient-to-b from-purple-400 to-fuchsia-500 rounded-lg shadow-md"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-y-scroll</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
                
                <div className="mb-7">
                <h6 className="font-bold text-lg mb-2">Overflow Scroll</h6>
                    <p className="mb-4">Use the <span className="font-semibold">overflow-scroll</span> utility to add scrollbars to an element. Unlike overflow-auto, which only shows scrollbars if they are necessary, this utility always shows them. Note that some operating systems (like macOS) hide unnecessary scrollbars regardless of this setting.</p>
                    <div className="overflow-scroll space-y-3 h-64 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-lg p-4 mb-5">
                        <div className="flex space-x-6">
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                        </div>
                        <div className="flex space-x-6">
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                            <div className="flex-none w-40 h-40 bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-600 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"></div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
                            {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-scroll</span>{` ..."></div>`}
                        </code>
                    </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply overflow utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="overflow-auto `}<span className='bg-secondary p-1 rounded'>hover:overflow-scroll</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Overflow
