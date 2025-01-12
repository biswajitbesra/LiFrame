import React from 'react'

function AspectRatio() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Aspect Ratio.</h1>
            <p className='mb-4'>The <span className='font-semibold'>aspect-ratio</span> utility in LiFrame allows you to define a fixed ratio for an element's width and height. It is particularly useful for creating responsive elements such as videos, images, or divs that need to maintain a consistent aspect ratio.</p>
            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> aspect-auto </td>
                            <td className='border-b border-[#ababab] py-2'> aspect-ratio: auto; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> aspect-square </td>
                            <td className='border-b border-[#ababab] py-2'> aspect-ratio: 1 / 1; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'> aspect-video </td>
                            <td className='border-b border-[#ababab] py-2'> aspect-ratio: 16 / 9 </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply an aspect ratio to an element, simply add the appropriate <span className='font-semibold'>aspect-&#9913;</span> utility class.</p>
                <div className='mb-5 p-5 rounded-lg border border-black'>
                    <iframe className='w-full aspect-video rounded-lg' src="https://www.youtube.com/embed/HcOc7P5BMi4" title="HTML Tutorial for Beginners | Complete HTML with Notes &amp; Code" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        <span>&lt;</span><span>iframe</span> <span>class</span><span>=</span><span>"w-full</span> <span className='bg-secondary p-1 rounded'>aspect-video</span><span>"</span> <span>src</span><span>=</span><span>"</span><span>...</span><span>"</span><span>&gt;</span><span></span><span>&lt;/iframe&gt;</span>
                    </code>
                </pre>
            </section>
            <section className='mb-8'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply aspect ratio utilities using pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span> and others.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        <span>&lt;</span><span>iframe</span> <span>class</span><span>=</span><span>"w-full</span> <span>aspect-video</span> <span className='bg-secondary p-1 rounded'>hover:aspect-Square</span><span>"</span> <span>src</span><span>=</span><span>"</span><span>...</span><span>"</span><span>&gt;</span><span></span><span>&lt;/iframe&gt;</span>
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default AspectRatio
