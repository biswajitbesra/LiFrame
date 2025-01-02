import React from 'react'

function Isolation() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Isolation.</h1>
            <p className="mb-4">The <span className="font-semibold">isolation</span> property is used to define whether an element creates a new stacking context. This is particularly useful when managing overlapping elements (e.g., with z-index) and avoiding unexpected behavior caused by shared stacking contexts. LiFrame provides utility classes to toggle isolation easily.</p>
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
                            <td className='border-b border-[#ababab] py-2'>isolate</td>
                            <td className='border-b border-[#ababab] py-2'>isolation: isolate;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>isolation-auto</td>
                            <td className='border-b border-[#ababab] py-2'>isolation: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">isolate</span> and <span className="font-semibold">isolation-auto</span> utilities to control whether an element should explicitly create a new stacking context.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">isolate</span> ...{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply isolation utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="isolate`} <span className="bg-secondary p-1 rounded">hover:isolation-auto</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Isolation
