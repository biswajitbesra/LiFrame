import React from 'react'

function Order() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Order.</h1>
            <p className='mb-4'>The <span className='font-semibold'>order</span> utility controls the visual arrangement of flex items within a flex container. It allows you to reorder elements without changing their position in the HTML markup.</p>

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
                            <td class="border-b border-[#ababab] py-2">order-1</td>
                            <td class="border-b border-[#ababab] py-2">order: 1;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-2</td>
                            <td class="border-b border-[#ababab] py-2">order: 2;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-3</td>
                            <td class="border-b border-[#ababab] py-2">order: 3;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-4</td>
                            <td class="border-b border-[#ababab] py-2">order: 4;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-5</td>
                            <td class="border-b border-[#ababab] py-2">order: 5;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-6</td>
                            <td class="border-b border-[#ababab] py-2">order: 6;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-7</td>
                            <td class="border-b border-[#ababab] py-2">order: 7;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-8</td>
                            <td class="border-b border-[#ababab] py-2">order: 8;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-9</td>
                            <td class="border-b border-[#ababab] py-2">order: 9;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-10</td>
                            <td class="border-b border-[#ababab] py-2">order: 10;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-11</td>
                            <td class="border-b border-[#ababab] py-2">order: 11;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-12</td>
                            <td class="border-b border-[#ababab] py-2">order: 12;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-first</td>
                            <td class="border-b border-[#ababab] py-2">order: -9999;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-last</td>
                            <td class="border-b border-[#ababab] py-2">order: 9999;</td>
                        </tr>
                        <tr>
                            <td class="border-b border-[#ababab] py-2">order-none</td>
                            <td class="border-b border-[#ababab] py-2">order: 0;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>By default, flex items are displayed in the order they appear in the HTML. The <span className='font-semibold'>order</span> utility allows you to change this order by assigning numerical values to items. A lower order value moves an element forward, while a higher value pushes it back.</p>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust the order of elements responsively using screen size prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can dynamically modify the order of an element.</p>
            </section>
        </div>
    )
}

export default Order