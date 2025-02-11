import React from 'react'

function Flex() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex</span> utility in LiFrame controls how a flex item grows and shrinks inside a flex container. It determines how much space an element takes up relative to its siblings.</p>

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
                            <td class="border-b border-[#ababab] py-2">flex-1</td>
                            <td class="border-b border-[#ababab] py-2">flex: 1 1 0%;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-auto</td>
                            <td class="border-b border-[#ababab] py-2">flex: 1 1 auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-initial</td>
                            <td class="border-b border-[#ababab] py-2">flex: 0 1 auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">flex-none</td>
                            <td class="border-b border-[#ababab] py-2">flex: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>By using <span className='font-semibold'>flex-&#9913;</span> classes, you can control whether a flex item should grow, shrink, or stay at a fixed size within its container. This is useful for responsive layouts and dynamic spacing.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can change how an element behaves inside a flex container based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> allow dynamic adjustments.</p>
            </section>
        </div>
    )
}

export default Flex