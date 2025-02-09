import React from 'react'

function AlignSelf() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Self.</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-self</span> utility in LiFrame allows you to control the alignment of a specific flex or grid item along the cross axis, independently of the other items. This is useful when you want to align a single item differently within its container, while keeping the others aligned in the same way.</p>

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
                            <td class="border-b border-[#ababab] py-2">self-auto</td>
                            <td class="border-b border-[#ababab] py-2">align-self: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">self-start</td>
                            <td class="border-b border-[#ababab] py-2">align-self: flex-start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">self-end</td>
                            <td class="border-b border-[#ababab] py-2">align-self: flex-end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">self-center</td>
                            <td class="border-b border-[#ababab] py-2">align-self: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">self-stretch</td>
                            <td class="border-b border-[#ababab] py-2">align-self: stretch;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">self-baseline</td>
                            <td class="border-b border-[#ababab] py-2">align-self: baseline;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-self-&#9913;</span> utility allows you to change the alignment of individual items. For example, <span className='font-semibold'>align-self-start</span> aligns the item to the start of the container, <span className='font-semibold'>align-self-center</span> centers the item, and <span className='font-semibold'>align-self-end</span> aligns it to the end.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply the <span className='font-semibold'>align-self</span> utility using responsive prefixes, such as <span className='font-semibold'>md:align-self-center</span> to change the alignment based on screen size. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to dynamically adjust the item's alignment.</p>
            </section>
        </div>
    )
}

export default AlignSelf