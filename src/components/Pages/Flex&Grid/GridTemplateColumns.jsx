import React from 'react'

function GridTemplateColumns() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Template Columns.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-template-columns</span> utility in LiFrame defines the number and width of columns in a CSS grid layout. It allows you to create flexible and responsive grid structures with ease.</p>

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
                            <td class="border-b border-[#ababab] py-2">grid-cols-1</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(1, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-2</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(2, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-3</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(3, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-4</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(4, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-5</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(5, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-6</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(6, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-7</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(7, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-8</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(8, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-9</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(9, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-10</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(10, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-11</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(11, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-12</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: repeat(12, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-none</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: none;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">grid-cols-subgrid</td>
                            <td class="border-b border-[#ababab] py-2">grid-template-columns: subgrid;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>grid-cols-&#9913;</span> utility allows you to define a specific number of columns in a grid layout. For example, <span className='font-semibold'>grid-cols-3</span> creates a grid with three equally spaced columns.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can control the number of columns responsively using screen size prefixes. For example, <span className='font-semibold'>md:grid-cols-4</span> applies four columns at the <span className='font-semibold'>md</span> (medium) breakpoint. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically adjust column layouts.</p>
            </section>
        </div>
    )
}

export default GridTemplateColumns