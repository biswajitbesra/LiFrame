import React from 'react'

function BoxDecorationBreak() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Box Decoration Break.</h1>
            <p className="mb-4">The <span className="font-semibold">box-decoration-break</span> utility in Tailwind CSS controls how box decorations (such as borders, backgrounds, shadows, etc.) behave when a box is fragmented across multiple lines, columns, or pages.</p>
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
                            <td className='border-b border-[#ababab] py-2'>box-decoration-slice</td>
                            <td className='border-b border-[#ababab] py-2'>box-decoration-break: slice;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>box-decoration-clone</td>
                            <td className='border-b border-[#ababab] py-2'>box-decoration-break: clone;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">box-decoration-slice</span> and <span className="font-semibold">box-decoration-clone</span> utilities to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks.</p>
                <div class="relative overflow-auto mb-5 p-5 rounded-lg border border-black">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 px-10 font-mono font-bold">
                        <div class="flex flex-col">
                            <p class="font-medium text-sm text-black font-mono mb-3">box-decoration-slice</p>
                            <div class="text-5xl font-extrabold leading-none tracking-tight font-sans">
                                <span class="box-decoration-slice text-white bg-gradient-to-r  from-neutral-800 to-green-700 leading-[3.5rem] px-2">
                                    Hello<br />
                                    World
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <p class="font-medium text-sm text-black font-mono mb-3">box-decoration-clone</p>
                            <div class="text-5xl font-extrabold leading-none tracking-tight font-sans">
                                <span class="box-decoration-clone text-white bg-gradient-to-r from-neutral-800 to-green-700 leading-[3.5rem] px-2">
                                    Hello<br />
                                    World
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <pre className='border border-black p-2 rounded-lg w-full overflow-x-scroll'>
                    <code className='w-full overflow-x-scroll'>
                        {`<span class="`}<span className="bg-secondary p-1 rounded">box-decoration-slice</span> {`bg-gradient-to-r from-neutral-800 to-green-700 text-white px-2 ...">
  Hello<br />
  World
</span>
<span class="`}<span className="bg-secondary p-1 rounded">box-decoration-clone</span> {`bg-gradient-to-r from-neutral-800 to-green-700 text-white px-2 ...">
  Hello<br />
  World
</span>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply box decoration break utilities using pseudo-classes like <span className='font-semibold'>hover</span>, <span className='font-semibold'>focus</span> and others.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="box-decoration-clone`} <span className="bg-secondary p-1 rounded">hover:box-decoration-slice</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default BoxDecorationBreak
