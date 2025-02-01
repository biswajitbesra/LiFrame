import React from 'react'

function FlexGrow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Grow.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-grow</span> utility defines how much a flex item should grow relative to its siblings. It helps in distributing available space dynamically inside a flex container.</p>

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
                <p className='mb-4'>Using <span className='font-semibold'>flex-grow</span> classes, you can control whether an element expands to fill available space in a flex container. Elements with a higher flex-grow value take up more space compared to those with a lower value.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Flex grow behavior can be adjusted based on different screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically change how an item grows.</p>
            </section>
        </div>

    )
}

export default FlexGrow