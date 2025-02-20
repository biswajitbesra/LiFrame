import React from 'react'

function PlaceContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Place Content.</h1>
            <p className='mb-4'>The <span className='font-semibold'>place-content</span> utility in LiFrame is used to align items within both axes (horizontal and vertical) in a grid container. It allows you to set the alignment of the entire grid content, combining both the <span className='font-semibold'>justify-content</span> and <span className='font-semibold'>align-content</span> properties in a single utility class.</p>

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
                            <td class="border-b border-[#ababab] py-2">place-content-center</td>
                            <td class="border-b border-[#ababab] py-2">place-content: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-start</td>
                            <td class="border-b border-[#ababab] py-2">place-content: start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-end</td>
                            <td class="border-b border-[#ababab] py-2">place-content: end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-between</td>
                            <td class="border-b border-[#ababab] py-2">place-content: space-between;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-around</td>
                            <td class="border-b border-[#ababab] py-2">place-content: space-around;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-evenly</td>
                            <td class="border-b border-[#ababab] py-2">place-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-baseline</td>
                            <td class="border-b border-[#ababab] py-2">place-content: baseline;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-content-stretch</td>
                            <td class="border-b border-[#ababab] py-2">place-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>place-content-&#9913;</span> utility is a shorthand for controlling both horizontal and vertical alignment in a grid container. For instance, <span className='font-semibold'>place-content-center</span> will center the items both vertically and horizontally, while <span className='font-semibold'>place-content-start</span> aligns the content to the start of both axes.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Conditional alignment can be applied with responsive prefixes like <span className='font-semibold'>lg:place-content-start</span> to adjust the alignment based on screen size. Additionally, pseudo-classes such as <span className='font-semibold'>hover</span> can be used to dynamically change the content alignment.</p>
            </section>
        </div>
    )
}

export default PlaceContent