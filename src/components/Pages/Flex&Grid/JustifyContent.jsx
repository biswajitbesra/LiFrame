import React from 'react'

function JustifyContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Content.</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-content</span> utility in LiFrame allows you to align and distribute space between items along the main axis of a flex container. This is essential for controlling the overall layout and alignment of items in a flexbox or grid layout.</p>

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
                            <td class="border-b border-[#ababab] py-2">justify-normal</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: normal;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-start</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-end</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-center</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-between</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: space-between;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-around</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: space-around;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-evenly</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-stretch</td>
                            <td class="border-b border-[#ababab] py-2">justify-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>justify-&#9913;</span> utility controls the alignment of items along the main axis. For example, <span className='font-semibold'>justify-start</span> aligns items to the start of the container, while <span className='font-semibold'>justify-center</span> centers them, and <span className='font-semibold'>justify-between</span> distributes them evenly with space between.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can apply different justification rules based on screen size with responsive prefixes like <span className='font-semibold'>md:justify-center</span> for medium screens or larger. Additionally, you can use pseudo-classes like <span className='font-semibold'>hover</span> to adjust the alignment dynamically based on user interaction.</p>
            </section>
        </div>
    )
}

export default JustifyContent