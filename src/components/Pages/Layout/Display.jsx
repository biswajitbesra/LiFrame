import React from 'react'

function Display() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Display--</h1>
            <p className="mb-4">The <span className="font-semibold">display</span> property in CSS controls the display behavior of an element. It determines whether an element is rendered as a block, inline, or inline-block element. Tailwind CSS provides utilities for controlling the <span className="font-semibold">display</span> property, which allows for quick and responsive layout adjustments.</p>
            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>block</td>
                            <td className='border-b border-[#ababab] py-2'>display: block;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-block</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-block;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>flex</td>
                            <td className='border-b border-[#ababab] py-2'>display: flex;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-flex</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-flex;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table</td>
                            <td className='border-b border-[#ababab] py-2'>display: table;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-table</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-table;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-caption</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-caption;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-cell</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-cell;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-column</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-column;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-column-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-column-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-footer-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-footer-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-header-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-header-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-row-group</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-row-group;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>table-row</td>
                            <td className='border-b border-[#ababab] py-2'>display: table-row;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>flow-root</td>
                            <td className='border-b border-[#ababab] py-2'>display: flow-root;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>grid</td>
                            <td className='border-b border-[#ababab] py-2'>display: grid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>inline-grid</td>
                            <td className='border-b border-[#ababab] py-2'>display: inline-grid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>contents</td>
                            <td className='border-b border-[#ababab] py-2'>display: contents;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>list-item</td>
                            <td className='border-b border-[#ababab] py-2'>display: list-item;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>hidden</td>
                            <td className='border-b border-[#ababab] py-2'>display: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg mb-6'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">inline</span>, <span className="font-semibold">block</span>, and <span className="font-semibold">inline-block</span> utilities to control the flow of text and elements.</p>
                <div className="border border-black p-5 mb-5 rounded-lg">
                    The <span className="bg-secondary bg-opacity-50 px-1 rounded inline">inline</span> class is perfect for placing small elements like icons or links within a line of text, ensuring they flow naturally with surrounding content.
                    <br />
                    <br />
                    Using the <span className="bg-secondary bg-opacity-50 px-1 rounded block">block</span> class allows you to create elements that take up the full width of their container, making them ideal for headings, paragraphs, or dividers.
                    <br />
                    <br />
                    With the <span className="bg-secondary bg-opacity-50 px-1 rounded inline-block">inline-block</span> class, you can style elements like buttons or badges to behave inline while still allowing custom width and height adjustments.
                </div>
                <pre className='border border-black p-2 rounded-lg '>
                    <code>
{`<div>
  The <span className="inline">inline</span> 
  class is perfect for placing small elements like icons or links within a line of text, 
  ensuring they flow naturally with surrounding content.

  Using the <span className="block">block</span> 
  class allows you to create elements that take up the full width of their container, 
  making them ideal for headings, paragraphs, or dividers.

  With the <span className="inline-block">inline-block</span> class, 
  you can style elements like buttons or badges to behave inline while still allowing 
  custom width and height adjustments.
</div>
`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg mb-6'>Applying conditionally</h5>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Display
