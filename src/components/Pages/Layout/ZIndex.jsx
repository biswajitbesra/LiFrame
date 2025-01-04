import React from 'react'

function ZIndex() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Z-index--</h1>
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
                <p className="mb-4">Use the <span className="font-semibold">z-*</span> utilities to control the stack order (or three-dimensional positioning) of an element, regardless of order it has been displayed.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="`}<span className="bg-secondary p-1 rounded">z-40</span>{` ...">05</div>
<div class="`}<span className="bg-secondary p-1 rounded">z-30</span>{` ...">04</div>
<div class="`}<span className="bg-secondary p-1 rounded">z-20</span>{` ...">03</div>
<div class="`}<span className="bg-secondary p-1 rounded">z-10</span>{` ...">02</div>
<div class="`}<span className="bg-secondary p-1 rounded">z-0</span>{` ...">01</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use <span className="font-semibold">hover:z-50</span> to only apply the <span className="font-semibold">z-50</span> utility on hover.</p>
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
