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
                            <td className="border-b border-[#ababab] py-2">order-1</td>
                            <td className="border-b border-[#ababab] py-2">order: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-2</td>
                            <td className="border-b border-[#ababab] py-2">order: 2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-3</td>
                            <td className="border-b border-[#ababab] py-2">order: 3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-4</td>
                            <td className="border-b border-[#ababab] py-2">order: 4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-5</td>
                            <td className="border-b border-[#ababab] py-2">order: 5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-6</td>
                            <td className="border-b border-[#ababab] py-2">order: 6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-7</td>
                            <td className="border-b border-[#ababab] py-2">order: 7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-8</td>
                            <td className="border-b border-[#ababab] py-2">order: 8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-9</td>
                            <td className="border-b border-[#ababab] py-2">order: 9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-10</td>
                            <td className="border-b border-[#ababab] py-2">order: 10;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-11</td>
                            <td className="border-b border-[#ababab] py-2">order: 11;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-12</td>
                            <td className="border-b border-[#ababab] py-2">order: 12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-first</td>
                            <td className="border-b border-[#ababab] py-2">order: -9999;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-last</td>
                            <td className="border-b border-[#ababab] py-2">order: 9999;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">order-none</td>
                            <td className="border-b border-[#ababab] py-2">order: 0;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Ordering flex and grid items</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>order-&#9913;</span> utilities to render flex and grid items in a different order than they appear in the DOM.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-between">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg order-3">01</div>
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg order-2">02</div>
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg order-1">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex justify-between">
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">order-3</span>{`">01</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">order-2</span>{`">02</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">order-1</span>{`">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Using negative values</h6>
                    <p className='mb-4'>To use a negative order value, prefix the class name with a dash to convert it to a negative value.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-between">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg order-1">01</div>
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg -order-1">02</div>
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg order-2">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex justify-between">
  <div class="order-1">01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">-order-1</span>{`">02</div>
  <div class="order-2">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust the order of elements responsively using screen size prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can dynamically modify the order of an element.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="order-1 `}<span className="bg-secondary p-1 rounded">hover:order-2</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Order