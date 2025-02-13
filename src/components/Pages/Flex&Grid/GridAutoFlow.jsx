import React from 'react'

function GridAutoFlow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Auto Flow.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-auto-flow</span> utility in LiFrame allows you to control how the grid items are placed into grid containers. It determines the auto-placement behavior of items when there is extra space in the grid.</p>

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
                            <td class="border-b border-[#ababab] py-2">grid-flow-row</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-flow: row;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-flow-col</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-flow: column;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-flow-dense</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-flow: dense;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-flow-row-dense</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-flow: row dense;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-flow-col-dense</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-flow: column dense;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>grid-flow-&#9913;</span> utility lets you define how items are placed automatically. For example, <span className='font-semibold'>grid-flow-row</span> places items by rows, while <span className='font-semibold'>grid-flow-col</span> places items by columns.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes like <span className='font-semibold'>lg:grid-flow-col</span> to adjust the auto-flow behavior at different screen sizes. Pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can also be applied to modify flow interactively.</p>
            </section>
        </div>
    )
}

export default GridAutoFlow