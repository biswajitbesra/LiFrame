import React from 'react'

function BreakBefore() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Break Before.</h1>
            <p className="mb-4">The <span className="font-semibold">break-before</span> utility in LiFrame determines the page, column, or region break behavior before an element. It is useful for controlling content flow in multi-column layouts or paginated documents, especially when you want specific elements to always appear at the beginning of a new page, column, or region.</p>
            <section className='mb-7'>
                <table className='table-auto border-separate w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-auto</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-avoid</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: avoid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-all</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: all;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-avoid-page</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: avoid-page;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-page</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: page;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-left</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-right</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-before-column</td>
                            <td className='border-b border-[#ababab] py-2'>break-before: column;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">break-before-*</span> utilities to control how a column or page break should behave before an element. For example, use the <span className="font-semibold">break-before-column</span> utility to force a column break before an element.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="`}<span className="bg-secondary p-1 rounded">break-before-column</span>{`">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply the break-before utilities conditionally using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="`}<span className="bg-secondary p-1 rounded">hover:break-before-column</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default BreakBefore
