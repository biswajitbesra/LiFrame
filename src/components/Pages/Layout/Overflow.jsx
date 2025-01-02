import React from 'react'

function Overflow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Overflow--</h1>
            <p className="mb-4">The <span className="font-semibold">overflow</span> property in CSS controls what happens to content that is larger than its container. LiFrame provides utilities for managing both horizontal and vertical overflow, helping you handle scrolling or hiding of overflowing content effectively. These utilities can be applied to create responsive and interactive designs.</p>
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
                            <td className='border-b border-[#ababab] py-2'>overflow-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>flow-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow: scroll;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-hidden</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-clip</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: clip;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-visible</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-x-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-x: scroll;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overflow-y-scroll</td>
                            <td className='border-b border-[#ababab] py-2'>overflow-y: scroll;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">overflow-visible</span> utility to prevent content within an element from being clipped. Note that any content that overflows the bounds of the element will then be visible.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-visible</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-hidden</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-auto</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-x-auto</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-y-auto</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-x-scroll</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-y-scroll</span>{` ..."></div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className='bg-secondary p-1 rounded'>overflow-scroll</span>{` ..."></div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply overflow utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="overflow-auto `}<span className='bg-secondary p-1 rounded'>hover:overflow-scroll</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Overflow
