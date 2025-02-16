import React from 'react'

function GridColumnStartEnd() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Column Start / End.</h1>
            <p className='mb-4'>The <span className='font-semibold'>grid-column</span> utility in LiFrame allows you to control how an element spans across grid columns. It helps in defining explicit start and end positions of grid items within a grid container.</p>

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
                            <td class="border-b border-[#ababab] py-2">col-auto</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-1</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 1 / span 1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-2</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 2 / span 2;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-3</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 3 / span 3;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-4</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 4 / span 4;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-5</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 5 / span 5;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-6</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 6 / span 6;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-7</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 7 / span 7;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-8</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 8 / span 8;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-9</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 9 / span 9;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-10</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 10 / span 10;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-11</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 11 / span 11;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-12</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: span 12 / span 12;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-span-full</td>
                            <td class="border-b border-[#ababab] py-2">grid-column: 1 / -1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-1</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-2</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 2;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-3</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 3;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-4</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 4;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-5</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 5;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-6</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 6;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-7</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 7;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-8</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 8;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-9</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 9;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-10</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 10;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-11</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 11;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-12</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 12;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-13</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: 13;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-start-auto</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-start: auto;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-1</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-2</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 2;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-3</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 3;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-4</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 4;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-5</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 5;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-6</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 6;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-7</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 7;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-8</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 8;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-9</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 9;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-10</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 10;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-11</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 11;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-12</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 12;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-13</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: 13;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">col-end-auto</td>
                            <td class="border-b border-[#ababab] py-2">grid-column-end: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>Use the <span className='font-semibold'>col-start-&#9913;</span> and <span className='font-semibold'>col-end-&#9913;</span> utilities to specify where a grid item should start and end. For example, <span className='font-semibold'>col-start-2 col-end-4</span> makes an item start at the second column line and end at the fourth.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes like <span className='font-semibold'>lg:col-span-3</span> to dynamically change how columns are spanned at different screen sizes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to modify column positioning interactively.</p>
            </section>
        </div>
    )
}

export default GridColumnStartEnd