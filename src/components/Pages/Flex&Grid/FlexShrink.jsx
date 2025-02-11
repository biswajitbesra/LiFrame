import React from 'react'

function FlexShrink() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Shrink.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-shrink</span> utility determines how a flex item shrinks when there is not enough space in a flex container. It controls the proportion by which an item reduces its size compared to others.</p>

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
                            <td class="border-b border-[#ababab] py-2">shrink</td>
                            <td class="border-b border-[#ababab] py-2">flex-shrink: 1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">shrink-0</td>
                            <td class="border-b border-[#ababab] py-2">flex-shrink: 0;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>By default, flex items shrink when the container lacks space. The <span className='font-semibold'>flex-shrink</span> utility allows you to control this behavior, ensuring specific elements shrink more or less than others when space is limited.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can modify how elements shrink based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically adjust shrink behavior.</p>
            </section>
        </div>
    )
}

export default FlexShrink