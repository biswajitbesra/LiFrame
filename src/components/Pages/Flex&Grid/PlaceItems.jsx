import React from 'react'

function PlaceItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Place Items.</h1>
            <p className='mb-4'>The <span className='font-semibold'>place-items</span> utility in LiFrame is used to align grid items along both axes (horizontal and vertical). It combines the effects of the <span className='font-semibold'>justify-items</span> and <span className='font-semibold'>align-items</span> utilities, allowing you to control the alignment of all items within a grid container simultaneously.</p>

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
                            <td class="border-b border-[#ababab] py-2">place-items-start</td>
                            <td class="border-b border-[#ababab] py-2">place-items: start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-items-end</td>
                            <td class="border-b border-[#ababab] py-2">place-items: end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-items-center</td>
                            <td class="border-b border-[#ababab] py-2">place-items: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-items-baseline</td>
                            <td class="border-b border-[#ababab] py-2">place-items: baseline;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">place-items-stretch</td>
                            <td class="border-b border-[#ababab] py-2">place-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>place-items-&#9913;</span> utility applies alignment to all grid items at once. For example, <span className='font-semibold'>place-items-center</span> centers items both vertically and horizontally, while <span className='font-semibold'>place-items-start</span> aligns all items to the start of both axes.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes such as <span className='font-semibold'>md:place-items-center</span> to change the alignment based on screen size. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> allow you to dynamically adjust the alignment of grid items during user interaction.</p>
            </section>
        </div>
    )
}

export default PlaceItems