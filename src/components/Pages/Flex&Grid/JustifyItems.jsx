import React from 'react'

function JustifyItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Items.</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-items</span> utility in LiFrame is used to align items along the cross axis of a grid or flex container. It helps to control the alignment of grid items or flex items in the container.</p>

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
                            <td class="border-b border-[#ababab] py-2">justify-items-start</td>
                            <td class="border-b border-[#ababab] py-2">justify-items: start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-items-end</td>
                            <td class="border-b border-[#ababab] py-2">justify-items: end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-items-center</td>
                            <td class="border-b border-[#ababab] py-2">justify-items: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-items-stretch</td>
                            <td class="border-b border-[#ababab] py-2">justify-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>justify-items-&#9913;</span> utility controls how items are justified within their grid or flex container. For instance, <span className='font-semibold'>justify-items-start</span> aligns items to the start, while <span className='font-semibold'>justify-items-center</span> centers them, and <span className='font-semibold'>justify-items-end</span> aligns them to the end.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>To apply conditional justification based on screen size, you can use responsive prefixes like <span className='font-semibold'>sm:justify-items-start</span> for small screens. Pseudo-classes like <span className='font-semibold'>hover</span> can also dynamically adjust the alignment as needed.</p>
            </section>
        </div>
    )
}

export default JustifyItems