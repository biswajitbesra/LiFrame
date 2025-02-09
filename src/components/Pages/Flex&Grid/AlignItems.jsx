import React from 'react'

function AlignItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Items.</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-items</span> utility in LiFrame is used to align flex items or grid items along the cross axis. It determines how the items are positioned within the container along the vertical axis in a flex or grid layout.</p>

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
                            <td class="border-b border-[#ababab] py-2">items-start</td>
                            <td class="border-b border-[#ababab] py-2">align-items: flex-start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">items-end</td>
                            <td class="border-b border-[#ababab] py-2">align-items: flex-end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">items-center</td>
                            <td class="border-b border-[#ababab] py-2">align-items: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">items-baseline</td>
                            <td class="border-b border-[#ababab] py-2">align-items: baseline;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">items-stretch</td>
                            <td class="border-b border-[#ababab] py-2">align-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-items-&#9913;</span> utility allows you to align flex items or grid items within their container. For example, <span className='font-semibold'>align-items-start</span> aligns the items to the start of the container, <span className='font-semibold'>align-items-center</span> centers them vertically, and <span className='font-semibold'>align-items-end</span> aligns them to the end.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Conditional alignment can be applied with responsive prefixes like <span className='font-semibold'>lg:align-items-center</span> to adjust the alignment based on screen size. You can also use pseudo-classes such as <span className='font-semibold'>hover</span> to apply the alignment when the element is interacted with.</p>
            </section>
        </div>
    )
}

export default AlignItems