import React from 'react'

function BoxSizing() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Box Sizing.</h1>
            <p className="mb-4">The <span className="font-semibold">box-sizing</span> utility in LiFrame controls how the size of an element is calculated. This determines whether padding and borders are included in the total size of the element or not.</p>
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
                            <td className='border-b border-[#ababab] py-2'>box-border</td>
                            <td className='border-b border-[#ababab] py-2'>box-sizing: border-box;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>box-content</td>
                            <td className='border-b border-[#ababab] py-2'>box-sizing: content-box;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-2">Use the <span className="font-semibold">box-border</span> utility to set an element’s <span className="font-semibold">box-sizing</span> to <span className="font-semibold">border-box</span>, telling the browser to include the element’s borders and padding when you give it a height or width.</p>
                <p className="mb-4">This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">box-border</span> {`h-32 w-32 p-4 border-4 ...">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can also apply the box-sizing classes conditionally using pseudo-utilities like <span className="font-semibold">hover</span> or <span className="font-semibold">focus</span>, or at different screen sizes using LiFrame's responsive classes.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="box-border`} <span className="bg-secondary p-1 rounded">hover:box-content</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default BoxSizing
