import React from 'react'

function BreakInside() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Break Inside.</h1>
            <p className="mb-4">The <span className="font-semibold">break-inside</span> utility in LiFrame allows you to control whether a page, column, or region break is allowed inside an element. This is particularly useful when dealing with multi-column layouts, paginated content, or grids, where you might want to avoid breaking the content of a specific element.</p>
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
                            <td className='border-b border-[#ababab] py-2'>break-inside-auto</td>
                            <td className='border-b border-[#ababab] py-2'>break-inside: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-inside-avoid</td>
                            <td className='border-b border-[#ababab] py-2'>break-inside: avoid;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-inside-avoid-page</td>
                            <td className='border-b border-[#ababab] py-2'>break-inside: avoid-page;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>break-inside-avoid-column</td>
                            <td className='border-b border-[#ababab] py-2'>break-inside: avoid-column;;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className="font-semibold">break-inside-*</span> classes are applied to elements to prevent or allow breaks inside the element.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="columns-2">
  <p>Well, let me tell you something, ...</p>
  <p class="`}<span className="bg-secondary p-1 rounded">break-inside-avoid-column</span>{`">Sure, go ahead, laugh...</p>
  <p>Maybe we can live without...</p>
  <p>Look. If you think this is...</p>
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply break-inside utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="`}<span className="bg-secondary p-1 rounded">hover:break-inside-avoid-column</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default BreakInside
