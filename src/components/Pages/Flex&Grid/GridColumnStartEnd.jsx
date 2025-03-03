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
                            <td className="border-b border-[#ababab] py-2">col-auto</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-1</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 1 / span 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-2</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 2 / span 2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-3</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 3 / span 3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-4</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 4 / span 4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-5</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 5 / span 5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-6</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 6 / span 6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-7</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 7 / span 7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-8</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 8 / span 8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-9</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 9 / span 9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-10</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 10 / span 10;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-11</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 11 / span 11;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-12</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: span 12 / span 12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-span-full</td>
                            <td className="border-b border-[#ababab] py-2">grid-column: 1 / -1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-1</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-2</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-3</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-4</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-5</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-6</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-7</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-8</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-9</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-10</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 10;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-11</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 11;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-12</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-13</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: 13;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-start-auto</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-start: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-1</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-2</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 2;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-3</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 3;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-4</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 4;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-5</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-6</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 6;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-7</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 7;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-8</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 8;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-9</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 9;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-10</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 10;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-11</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 11;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-12</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 12;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-13</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: 13;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">col-end-auto</td>
                            <td className="border-b border-[#ababab] py-2">grid-column-end: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Spanning columns</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>col-span-&#9913;</span> utilities to make an element span n columns.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-4 gap-4">
                            <div className="bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">1</div>
                            <div className="bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">2</div>
                            <div className="bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">3</div>
                            <div className="bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">4</div>
                            <div className="col-span-3 bg-gray-200 p-4 rounded-xl shadow-md text-center">5</div>
                            <div className="bg-gray-300 p-4 rounded-xl shadow-md text-center">6</div>
                            <div className="col-span-2 bg-blue-100 p-4 rounded-xl shadow-md text-center">7</div>
                            <div className="col-span-2 bg-blue-200 p-4 rounded-xl shadow-md text-center">8</div>
                            <div className="col-span-4 bg-blue-500 text-white p-4 rounded-xl shadow-lg text-center">9</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-4 gap-4">
  <div class="...">1</div>
  <div class="...">2</div>
  <div class="...">3</div>
  <div class="...">4</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-3</span>{` ...">5</div>
  <div class="...">6</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-2</span>{` ...">7</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-2</span>{` ...">8</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-span-4</span>{` ...">9</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Starting and ending lines</h6>
                    <p className='mb-4'>Use the <span className='font-semibold'>col-start-&#9913;</span> and <span className='font-semibold'>col-end-&#9913;</span> utilities to make an element start or end at the nth grid line. These can also be combined with the <span className='font-semibold'>col-span-&#9913;</span> utilities to span a specific number of columns.</p>
                    <p className="mb-2"><span className="px-2 py-0.5 bg-secondary rounded">Note:</span> CSS grid lines start at 1, not 0, so a full-width element in a 6-column grid would start at line 1 and end at line 7.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-6 gap-4">
                            <div className="col-start-3 col-end-5 bg-blue-500 p-4 rounded-xl shadow-lg text-center">1</div>
                            <div className="col-start-2 col-span-2 bg-gray-300 p-4 rounded-xl shadow-md text-center">2</div>
                            <div className="col-end-6 col-span-2 bg-gray-200 p-4 rounded-xl shadow-md text-center">3</div>
                            <div className="col-start-1 col-span-2 bg-blue-100 p-4 rounded-xl shadow-md text-center">4</div>
                            <div className="col-end-7 col-span-2 bg-blue-200 p-4 rounded-xl shadow-md text-center">5</div>
                            <div className="col-start-1 col-end-7 bg-blue-300 p-4 rounded-xl shadow-md text-center">6</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-6 gap-4">
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-start-3 col-end-5</span>{` ...">1</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-start-2</span> col-span-2{` ...">2</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-end-6</span> col-span-2{` ...">3</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-start-1</span> col-span-2{` ...">4</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-end-7</span> col-span-2{` ...">5</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">col-start-1 col-end-7</span>{` ...">6</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can use responsive prefixes like <span className='font-semibold'>lg:col-span-3</span> to dynamically change how columns are spanned at different screen sizes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to modify column positioning interactively.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="col-span-2 `}<span className="bg-secondary p-1 rounded">hover:col-span-6</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default GridColumnStartEnd