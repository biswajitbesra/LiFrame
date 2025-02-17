import React from 'react'

function GridTemplateRows() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Template Rows.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-template-rows</span> utility in LiFrame defines the number and height of rows in a CSS grid layout. It allows you to create structured and responsive grid-based designs by controlling the row distribution.</p>

            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead className='sticky top-0 w-full bg-primary'>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-1</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(1, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-2</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(2, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-3</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(3, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-4</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(4, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-5</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(5, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-6</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(6, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-7</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(7, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-8</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(8, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-9</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(9, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-10</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(10, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-11</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(11, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-12</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: repeat(12, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-none</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: none;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-rows-subgrid</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-rows: subgrid;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>grid-rows-&#9913;</span> utility lets you define a specific number of rows in a grid. For example, <span className='font-semibold'>grid-rows-3</span> creates a grid with three equally spaced rows.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust row configurations responsively using screen size prefixes. For example, <span className='font-semibold'>md:grid-rows-4</span> applies four rows at the <span className='font-semibold'>md</span> (medium) breakpoint. Pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can also be used for dynamic row adjustments.</p>
            </section>
        </div>
    )
}

export default GridTemplateRows