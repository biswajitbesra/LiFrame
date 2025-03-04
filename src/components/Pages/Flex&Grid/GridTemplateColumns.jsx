import React from 'react'

function GridTemplateColumns() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Template Columns</h1>
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
                            <td className="border-b border-[#ababab] py-2">grid-cols-1</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(1, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-2</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(2, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-3</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(3, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-4</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(4, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-5</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(5, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-6</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(6, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-7</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(7, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-8</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(8, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-9</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(9, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-10</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(10, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-11</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(11, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-12</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: repeat(12, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-none</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: none;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-cols-subgrid</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-columns: subgrid;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Specifying the columns in a grid</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>grid-cols-&#9913;</span> utilities to create grids with n equally sized columns.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-4 gap-4 text-center">
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>01</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>02</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>03</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>04</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>05</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>06</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>07</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>08</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid `}<span className="bg-secondary p-1 rounded">grid-cols-4</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Subgrid</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>grid-cols-subgrid</span> utility to adopt the column tracks defined by the item’s parent.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-4 gap-4 rounded-lg text-center">
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">01</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">02</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">03</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">04</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">05</div>
                            <div className="col-span-3 grid grid-cols-subgrid gap-4">
                                <div className="rounded-lg bg-secondary/40 p-4"></div>
                                <div className="rounded-lg bg-secondary p-4 shadow-lg">06</div>
                                <div className="rounded-lg bg-secondary/40 p-4"></div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-4 gap-4 rounded-lg">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="grid `}<span className="bg-secondary p-1 rounded">grid-cols-subgrid</span>{` col-span-3 gap-4">
    <div class="col-start-2">06</div>
  </div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can control the number of columns responsively using screen size prefixes. For example, <span className='font-semibold'>md:grid-cols-4</span> applies four columns at the <span className='font-semibold'>md</span> (medium) breakpoint. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically adjust column layouts.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid grid-cols-1 `}<span className="bg-secondary p-1 rounded">hover:grid-cols-6</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default GridTemplateColumns