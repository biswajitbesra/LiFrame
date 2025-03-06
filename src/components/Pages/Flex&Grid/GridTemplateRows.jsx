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
                            <td className="border-b border-[#ababab] py-2">grid-rows-1</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(1, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-2</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(2, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-3</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(3, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-4</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(4, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-5</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(5, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-6</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(6, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-7</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(7, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-8</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(8, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-9</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(9, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-10</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(10, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-11</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(11, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-12</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: repeat(12, minmax(0, 1fr));</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-none</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: none;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-rows-subgrid</td>
                            <td className="border-b border-[#ababab] py-2">grid-template-rows: subgrid;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Specifying the rows in a grid</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>grid-rows-&#9913;</span> utilities to create grids with n equally sized rows.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-rows-4 grid-flow-col gap-4 text-center">
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>01</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>02</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>03</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>04</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>05</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>06</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>07</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>08</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>09</div>
                            <div className='p-4 rounded-lg shadow-lg bg-secondary'>10</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div className="grid `}<span className="bg-secondary p-1 rounded">grid-rows-4</span>{` grid-flow-col gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Subgrid</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>grid-rows-subgrid</span> utility to adopt the row tracks defined by the item’s parent.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-rows-4 grid-flow-col gap-4 rounded-lg text-center">
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">01</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">02</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">03</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">04</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">05</div>
                            <div className="row-span-3 grid grid-rows-subgrid gap-4">
                                <div className="rounded-lg bg-secondary/40 p-4"></div>
                                <div className="rounded-lg bg-secondary p-4 shadow-lg">06</div>
                                <div className="rounded-lg bg-secondary/40 p-4"></div>
                            </div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">07</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">08</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">09</div>
                            <div className="rounded-lg bg-secondary p-4 shadow-lg">10</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-rows-4 grid-flow-col gap-4 rounded-lg">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div class="grid `}<span className="bg-secondary p-1 rounded">grid-rows-subgrid</span>{` row-span-3 gap-4">
    <div class="row-start-2">06</div>
  </div>
  <div>07</div>
  <div>08</div>
  <div>09</div>
  <div>10</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can adjust row configurations responsively using screen size prefixes. For example, <span className='font-semibold'>md:grid-rows-4</span> applies four rows at the <span className='font-semibold'>md</span> (medium) breakpoint. Pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can also be used for dynamic row adjustments.</p>
                <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-rows-2 `}<span className="bg-secondary p-1 rounded">hover:grid-rows-6</span>{`">
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default GridTemplateRows