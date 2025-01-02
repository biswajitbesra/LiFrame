import React from 'react'

function BreakAfter() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Break After.</h1>
            <p className="mb-4">The <span className='font-semibold'>break-after</span> utility in LiFrame controls the page, column, or region break behavior after an element. It allows you to specify how and where content should break after an element in a layout, such as multi-column or paginated layouts. This is particularly useful for controlling printed documents or layouts with flowable content.</p>
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
                            <td className='border-b border-[#ababab] py-2'>break-after-auto</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-avoid</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: avoid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-all</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: all;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-avoid-page</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: avoid-page;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-page</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: page;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-left</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-right</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-after-column</td>
                            <td className='border-b border-[#ababab] py-2'>break-after: column;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the break-after-* utilities to control how a column or page break should behave after an element. For example, use the <span className="font-semibold">break-after-column</span> utility to force a column break after an element.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="`}<span className="bg-secondary p-1 rounded">break-after-column</span>{`">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply the break-after utilities conditionally using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">hover:break-after-column</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default BreakAfter
