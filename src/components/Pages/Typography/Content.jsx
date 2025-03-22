import React from 'react'

function Content() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Content.</h1>
            <p className='mb-4'>The <span className='font-semibold'>content</span> utility in LiFrame allows you to control the insertion of content before or after an element. You can use this utility to add icons, text, or other content around elements dynamically for a more interactive user interface.</p>

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
                            <td class="border-b border-[#ababab] py-2">content-none</td>
                            <td class="border-b border-[#ababab] py-2">content: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To insert content, use the <span className='font-semibold'>content-['text']</span> class to add specific text or content before or after an element, like a pseudo-element.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply content using responsive prefixes like <span className='font-semibold'>sm:content-['icon']</span> or <span className='font-semibold'>lg:content-['text']</span> to adjust content based on the screen size.</p>
            </section>
        </div>
    )
}

export default Content