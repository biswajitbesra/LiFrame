import React from 'react'

function GridAutoFlow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Grid Auto Flow</h1>
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
                            <td className="border-b border-[#ababab] py-2">grid-flow-row</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-flow: row;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-flow-col</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-flow: column;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-flow-dense</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-flow: dense;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-flow-row-dense</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-flow: row dense;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grid-flow-col-dense</td>
                            <td className="border-b border-[#ababab] py-2">grid-auto-flow: column dense;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>Use the <span className='font-semibold'>grid-flow-&#9913;</span> utilities to control how the auto-placement algorithm works for a grid layout.</p>
                <div className="mb-5 p-5 rounded-lg border border-black">
                    <div className="grid grid-cols-3 grid-flow-row-dense gap-4">
                        <div className="bg-blue-500 text-white p-4 rounded-md text-center shadow-md">1</div>
                        <div className="bg-gray-300 p-4 rounded-md text-center shadow-md">2</div>
                        <div className="col-span-2 bg-blue-200 p-4 rounded-md text-center shadow-md">3</div>
                        <div className="row-span-2 bg-blue-100 p-4 rounded-md flex justify-center items-center shadow-md">4</div>
                        <div className="bg-blue-300 p-4 rounded-md text-center shadow-md">5</div>
                        <div className="col-span-3 bg-gray-400 p-4 rounded-md text-center shadow-md">6</div>
                        <div className="col-span-2 bg-blue-600 text-white p-4 rounded-md text-center shadow-md">7</div>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid grid-cols-3 `}<span className="bg-secondary px-1 py-0.5 rounded">grid-flow-row-dense</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-2</span>{`">3</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">row-span-2</span>{`">4</div>
  <div>5</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-3</span>{`">6</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-2</span>{`">7</div>
</div>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes like <span className='font-semibold'>lg:grid-flow-col</span> to adjust the auto-flow behavior at different screen sizes. Pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can also be applied to modify flow interactively.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid grid-flow-col `}<span className="bg-secondary p-1 rounded">hover:grid-flow-row</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default GridAutoFlow