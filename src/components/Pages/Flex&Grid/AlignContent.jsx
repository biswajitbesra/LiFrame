import React from 'react'

function AlignContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Content.</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-content</span> utility in LiFrame controls the alignment of rows (or flex items) within a flex container when there is extra space along the cross axis. It is useful when you have multiple rows of items and want to adjust how they are spaced and aligned.</p>

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
                            <td class="border-b border-[#ababab] py-2">content-normal</td>
                            <td class="border-b border-[#ababab] py-2">align-content: normal;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-center</td>
                            <td class="border-b border-[#ababab] py-2">align-content: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-start</td>
                            <td class="border-b border-[#ababab] py-2">align-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-end</td>
                            <td class="border-b border-[#ababab] py-2">align-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-between</td>
                            <td class="border-b border-[#ababab] py-2">align-content: space-between;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-around</td>
                            <td class="border-b border-[#ababab] py-2">align-content: space-around;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-evenly</td>
                            <td class="border-b border-[#ababab] py-2">align-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-baseline</td>
                            <td class="border-b border-[#ababab] py-2">align-content: baseline;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">content-stretch</td>
                            <td class="border-b border-[#ababab] py-2">align-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-content-&#9913;</span> utility controls how multiple rows or items are aligned within the container. For example, <span className='font-semibold'>align-content-start</span> aligns the rows to the start, while <span className='font-semibold'>align-content-center</span> centers them, and <span className='font-semibold'>align-content-end</span> aligns them to the end.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Responsive prefixes like <span className='font-semibold'>sm:align-content-center</span> can be used to apply different alignment rules for different screen sizes. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to adjust the alignment dynamically based on user interactions.</p>
            </section>
        </div>
    )
}

export default AlignContent