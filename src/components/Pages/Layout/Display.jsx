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
                <p className="mb-4">LiFrame’s <span className="font-semibold">display</span> utilities are used to set the display property of an element. This can be applied directly in the markup.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
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
