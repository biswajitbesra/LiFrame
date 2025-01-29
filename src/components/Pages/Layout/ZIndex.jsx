import React from 'react'

function ZIndex() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Z-index.</h1>
            <p className="mb-4">The <span className="font-semibold">z-index</span> utility in LiFrame controls the stacking order of elements on the page. Elements with a higher <span className="font-semibold">z-index</span> will appear in front of elements with a lower <span className="font-semibold">z-index</span>. This utility is particularly useful for creating layered layouts, managing modal dialogs, dropdowns, and other overlapping UI elements.</p>
            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-0</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 0;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-10</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 10;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-20</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 20;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-30</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 30;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-40</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 40;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-50</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: 50;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>z-auto</td>
                            <td className='border-b border-[#ababab] py-2'>z-index: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Z-index</h6>
                    <p className="mb-4">Use the <span className="font-semibold">z-&#9913;</span> utilities to control the stack order (or three-dimensional positioning) of an element, regardless of order it has been displayed.</p>
                    <div className="relative flex items-center justify-center h-72 border border-black p-5 rounded-lg mb-5">
                        <div className="absolute z-10 w-72 sm:w-80 h-44 sm:h-48 bg-blue-500 text-white rounded-2xl shadow-lg transform -translate-x-6 sm:-translate-x-8 translate-y-3 sm:translate-y-4 hover:scale-105 hover:z-50 transition-all duration-300">
                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold">Card 1</h2>
                                <p className="text-sm mt-2">This is the first card in the stack.</p>
                            </div>
                        </div>
                        <div className="absolute z-20 w-72 sm:w-80 h-44 sm:h-48 bg-green-500 text-white rounded-2xl shadow-lg transform translate-x-0 translate-y-0 hover:scale-105 hover:z-50 transition-all duration-300">
                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold">Card 2</h2>
                                <p className="text-sm mt-2">This is the second card, slightly higher in z-index.</p>
                            </div>
                        </div>
                        <div className="absolute z-30 w-72 sm:w-80 h-44 sm:h-48 bg-purple-500 text-white rounded-2xl shadow-lg transform translate-x-6 sm:translate-x-8 -translate-y-3 sm:-translate-y-4 hover:scale-105 hover:z-50 transition-all duration-300">
                            <div className="p-4 sm:p-6">
                                <h2 className="text-lg sm:text-xl font-semibold">Card 3</h2>
                                <p className="text-sm mt-2">This is the topmost card in the stack.</p>
                            </div>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                        <code>
{`<div>
  <div class="`}<span className="bg-secondary p-1 rounded">z-10</span>{` ...">
    <div>
      <h2>Card 1</h2>
      <p>This is the first card in the stack.</p>
    </div>
  </div>
  <div class="`}<span className="bg-secondary p-1 rounded">z-20</span>{` ...">
    <div>
      <h2>Card 2</h2>
      <p>This is the second card, slightly higher in z-index.</p>
    </div>
  </div>
  <div class="`}<span className="bg-secondary p-1 rounded">z-30</span>{` ...">
    <div>
      <h2>Card 3</h2>
      <p>This is the topmost card in the stack.</p>
    </div>
  </div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-">Using negative values</h6>
                    <p className="mb-4">To use a negative z-index value, prefix the class name with a dash to convert it to a negative value.</p>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">-z-10</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
                </div>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">LiFrame lets you conditionally apply utility classes in different states using variant modifiers. For example, use <span className="font-semibold">hover:z-50</span> to only apply the <span className="font-semibold">z-50</span> utility on hover.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="z-0 `}<span className="bg-secondary p-1 rounded">hover:z-50</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default ZIndex
