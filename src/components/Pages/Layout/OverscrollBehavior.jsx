import React from 'react'

function OverscrollBehavior() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Overscroll Behavior--</h1>
            <p className="mb-4">The <span className="font-semibold">overscroll-behavior</span> property in LiFrame controls how the browser handles scrolling past the edge of a scrollable element. It is especially useful for managing scroll behavior in certain elements such as when a user scrolls beyond the end of a scrollable area. This can improve user experience by preventing unwanted scrolling effects like bouncing or content sliding when it shouldn't.</p>
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
                            <td className='border-b border-[#ababab] py-2'>overscroll-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior: none;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-y-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-y: none;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-auto</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: auto;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-contain</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>overscroll-x-none</td>
                            <td className='border-b border-[#ababab] py-2'>overscroll-behavior-x: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4"><span className="font-semibold">overscroll-behavior</span></p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">overscroll-contain</span>{` ...">Well, let me tell you something, ...</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">overscroll-none</span>{` ...">Well, let me tell you something, ...</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">overscroll-auto</span>{` ...">Well, let me tell you something, ...</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can also apply the overscroll behavior conditionally using LiFrame’s pseudo-classes like <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, and others. This allows you to create more dynamic and responsive designs.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<html class="overscroll-auto `}<span className="bg-secondary p-1 rounded">focus:overscroll-contain</span>{`">
  <!-- ... -->
</html>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default OverscrollBehavior
