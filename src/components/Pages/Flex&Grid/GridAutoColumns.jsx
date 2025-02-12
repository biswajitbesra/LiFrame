import React from 'react'

function GridAutoColumns() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Auto Columns.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-auto-columns</span> utility in LiFrame allows you to specify the width of columns that are automatically generated in a grid container. This is useful when the grid container is dynamically filled with content, and you want to control the size of the auto-generated columns.</p>

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
                            <td class="border-b border-[#ababab] py-2">auto-cols-auto</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-columns: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">auto-cols-min</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-columns: min-content;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">auto-cols-max</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-columns: max-content;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">auto-cols-fr</td>
                            <td class="border-b border-[#ababab] py-2">grid-auto-columns: minmax(0, 1fr);</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>grid-auto-cols-&#9913;</span> utility allows you to define a fixed width for columns. For example, <span className='font-semibold'>grid-auto-cols-min</span> will set the minimum width for all auto-generated columns, while <span className='font-semibold'>grid-auto-cols-max</span> sets a maximum width.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust the auto-column size at different breakpoints using responsive prefixes like <span className='font-semibold'>sm:grid-auto-cols-[value]</span>. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to change the column width dynamically.</p>
            </section>
        </div>
    )
}

export default GridAutoColumns