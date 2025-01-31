import React from 'react'

function FlexBasis() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Basis.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-basis</span> utility in LiFrame allows you to set the initial size of a flex item before any remaining space is distributed. It is particularly useful for defining how elements grow or shrink inside a flex container.</p>

            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Leave the table content blank as per your request */}
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To control the initial size of a flex item, simply add the appropriate <span className='font-semibold'>basis-&#9913;</span> utility class. This defines the default size before it starts growing or shrinking.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can apply flex basis utilities conditionally using responsive prefixes or pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span>, and more.</p>
            </section>
        </div>
    )
}

export default FlexBasis