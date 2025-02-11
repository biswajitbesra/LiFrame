import React from 'react'

function FlexDirection() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Direction.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-direction</span> utility in LiFrame allows you to define the direction in which flex items are placed inside a flex container. It helps in controlling the layout of elements in row or column orientation.</p>

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
                            <td class="border-b border-[#ababab] py-2">flex-row</td>
                            <td class="border-b border-[#ababab] py-2">flex-direction: row;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-col</td>
                            <td class="border-b border-[#ababab] py-2">flex-direction: column;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-row-reverse</td>
                            <td class="border-b border-[#ababab] py-2">flex-direction: row-reverse;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-col-reverse</td>
                            <td class="border-b border-[#ababab] py-2">flex-direction: column-reverse;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To set the direction of flex items inside a container, use the appropriate <span className='font-semibold'>flex-&#9913;</span> utility class. This allows you to control whether items are placed in a row or column.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally change the flex direction using responsive prefixes or pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span>, and more.</p>
            </section>
        </div>
    )
}

export default FlexDirection