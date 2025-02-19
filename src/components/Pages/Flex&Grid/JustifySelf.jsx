import React from 'react'

function JustifySelf() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Self.</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-self</span> utility in LiFrame allows you to control the alignment of an individual item along the main axis within its container. This is useful when you want to align a specific item differently from others in a flex or grid container.</p>

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
                            <td class="border-b border-[#ababab] py-2">justify-self-auto</td>
                            <td class="border-b border-[#ababab] py-2">justify-self: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-self-start</td>
                            <td class="border-b border-[#ababab] py-2">justify-self: start;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-self-end</td>
                            <td class="border-b border-[#ababab] py-2">justify-self: end;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-self-center</td>
                            <td class="border-b border-[#ababab] py-2">justify-self: center;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">justify-self-stretch</td>
                            <td class="border-b border-[#ababab] py-2">justify-self: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>justify-self-&#9913;</span> utility lets you align individual items. For example, <span className='font-semibold'>justify-self-start</span> aligns an item to the start of its container, while <span className='font-semibold'>justify-self-center</span> centers the item, and <span className='font-semibold'>justify-self-end</span> aligns it to the end.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can apply the justify-self utility conditionally based on screen size using responsive prefixes like <span className='font-semibold'>md:justify-self-center</span>. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to adjust the item's alignment dynamically.</p>
            </section>
        </div>
    )
}

export default JustifySelf