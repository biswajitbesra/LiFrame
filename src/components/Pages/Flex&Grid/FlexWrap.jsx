import React from 'react'

function FlexWrap() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Wrap.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-wrap</span> utility in LiFrame controls whether flex items should wrap onto multiple lines or stay in a single row. This is useful when managing layouts with varying content sizes.</p>

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
                            <td class="border-b border-[#ababab] py-2">flex-wrap</td>
                            <td class="border-b border-[#ababab] py-2">flex-wrap: wrap;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-wrap-reverse</td>
                            <td class="border-b border-[#ababab] py-2">flex-wrap: wrap-reverse;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-nowrap</td>
                            <td class="border-b border-[#ababab] py-2">flex-wrap: nowrap;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>By default, flex items remain in a single row. However, using <span className='font-semibold'>flex-wrap</span> classes, you can allow items to wrap onto new lines, ensuring better responsiveness and layout control.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can modify flex wrapping based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically change wrapping behavior.</p>
            </section>
        </div>
    )
}

export default FlexWrap