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
                <h5 className='font-semibold text-lg mb-3'>Basic usage</h5>
                <h6 className='font-bold text-lg mb-2'>Including borders and padding</h6>
                <p className="mb-2">Use the <span className="font-semibold">box-border</span> utility to set an element’s <span className="font-semibold">box-sizing</span> to <span className="font-semibold">border-box</span>, telling the browser to include the element’s borders and padding when you give it a height or width.</p>
                <p className="mb-4">This means a 100px × 100px element with a 2px border and 4px of padding on all sides will be rendered as 100px × 100px, with an internal content area of 88px × 88px.</p>
                <div class="relative overflow-auto mb-5 p-5 rounded-lg border border-black">
                    <div class="relative grid grid-cols-[1fr,1fr,1fr] grid-rows-[1fr,3fr,1fr] gap-px font-mono text-sm font-bold leading-6 max-w-sm mx-auto w-full shadow-xl">
                        <div class="bg-secondary col-start-1 row-start-1"></div>
                        <div class="relative bg-secondary col-start-2 row-start-1">
                            {/* w-measure indicator */}
                            <div class="absolute flex bottom-2 left-0 right-0">
                                {/* Horizontal line --> */}
                                <div class="bg-forth h-px absolute left-0 top-1/2 -translate-y-px right-0"></div>
                                {/* Left chip */}
                                <div class="w-full">
                                    <div class="rounded-full h-2 bg-forth w-px absolute left-0 top-1/2 -translate-x-px -translate-y-1"></div>
                                </div>
                                {/* Badge */}
                                <div class="relative flex-auto font-mono font-bold w-full bg-secondary text-forth text-xs px-1.5 flex items-center justify-center leading-none">128px</div>
                                {/* Right chip */}
                                <div class="w-full">
                                    <div class="rounded-full h-2 bg-forth w-px absolute right-0 top-1/2 translate-x-px -translate-y-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-3 row-start-1"></div>
                        <div class="relative bg-secondary col-start-1 row-start-2">
                            {/* h-measure indicator */}
                            <div class="absolute flex top-0 bottom-0 right-2 w-3">
                                {/* Vertical line */}
                                <div class="bg-forth w-px absolute top-0 left-1/2 -translate-x-[0.5px] bottom-0"></div>
                                {/* Top chip */}
                                <div class="w-full">
                                    <div class="rounded-full w-2 bg-forth h-px absolute top-0 left-1/2 -translate-y-px -translate-x-1"></div>
                                </div>
                                {/* Badge */}
                                <div class="relative -rotate-90 -translate-x-[1.15rem] translate-y-14 h-3 flex flex-auto font-mono font-bold bg-secondary text-forth text-xs px-1.5 items-center justify-center leading-none">128px</div>
                                {/* Bottom chip */}
                                <div class="w-full">
                                    <div class="rounded-full w-2 bg-forth h-px absolute bottom-0 left-1/2 translate-y-px -translate-x-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-2 row-start-2 w-32 h-32 ring-1 ring-forth">
                            <div class="box-border relative bg-stripes-sky w-32 h-32 p-5 ring ring-forth ring-inset">
                                <div class="w-full h-full bg-forth ring-1 ring-forth"></div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-3 row-start-2"></div>
                        <div class="bg-secondary col-start-1 row-start-3"></div>
                        <div class="bg-secondary col-start-2 row-start-3"></div>
                        <div class="bg-secondary col-start-3 row-start-3"></div>
                    </div>
                </div>
                <pre className='border border-black p-2 rounded-lg mb-7'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">box-border</span> {`h-32 w-32 p-4 border-4 ...">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
                <h6 className='font-bold text-lg mb-2'>Excluding borders and padding</h6>
                <p className="mb-2">Use the <span className="font-semibold">box-content</span> utility to set an element’s <span className="font-semibold">box-sizing</span> to <span className="font-semibold">content-box</span>, telling the browser to add borders and padding on top of the element’s specified width or height.</p>
                <p className="mb-4">This means a 100px × 100px element with a 2px border and 4px of padding on all sides will actually be rendered as 112px × 112px, with an internal content area of 100px × 100px.</p>
                <div class="relative overflow-auto mb-5 p-5 rounded-lg border border-black">
                    <div class="relative grid grid-cols-[1fr,1fr,1fr] grid-rows-[1fr,2fr,1fr] gap-px bg-slate-700/10 font-mono text-sm font-bold leading-6 max-w-sm mx-auto w-full shadow-xl">
                        <div class="bg-secondary col-start-1 row-start-1"></div>
                        <div class="relative bg-secondary col-start-2 row-start-1">
                            {/* w-measure indicator  */}
                            <div class="absolute flex bottom-2 left-0 right-0 -translate-y-5">
                                {/* Horizontal line  */}
                                <div class="bg-forth h-px absolute left-0 top-1/2 -translate-y-px right-0"></div>
                                {/* Left chip  */}
                                <div class="w-full">
                                    <div class="rounded-full h-2 bg-forth w-px absolute left-0 top-1/2 -translate-x-px -translate-y-1"></div>
                                </div>
                                {/* Badge  */}
                                <div class="relative flex-auto font-mono font-bold w-full bg-secondary text-forth text-xs px-1.5 flex items-center justify-center leading-none">128px</div>
                                {/* Right chip  */}
                                <div class="w-full">
                                    <div class="rounded-full h-2 bg-forth w-px absolute right-0 top-1/2 translate-x-px -translate-y-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-3 row-start-1"></div>
                        <div class="relative bg-secondary col-start-1 row-start-2">
                            {/* h-measure indicator */}
                            <div class="absolute flex top-0 bottom-0 right-2 w-3 -translate-x-5">
                                {/* Vertical line */}
                                <div class="bg-forth w-px absolute top-0 left-1/2 -translate-x-[0.5px] bottom-0"></div>
                                {/* Top chip */}
                                <div class="w-full">
                                    <div class="rounded-full w-2 bg-forth h-px absolute top-0 left-1/2 -translate-y-px -translate-x-1"></div>
                                </div>
                                {/* Badge */}
                                <div class="relative -rotate-90 -translate-x-[1.15rem] translate-y-14 h-3 flex flex-auto font-mono font-bold bg-secondary text-forth text-xs px-1.5 items-center justify-center leading-none">128px</div>
                                {/* Bottom chip */}
                                <div class="w-full">
                                    <div class="rounded-full w-2 bg-forth h-px absolute bottom-0 left-1/2 translate-y-px -translate-x-1"></div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-2 row-start-2 w-32 h-32">
                            <div class="box-content -translate-x-5 -translate-y-5 relative bg-stripes-blue w-32 h-32 p-5 ring-4 ring-forth ring-inset">
                                <div class="w-full h-full bg-forth ring-1 ring-forth"></div>
                            </div>
                        </div>
                        <div class="bg-secondary col-start-3 row-start-2"></div>
                        <div class="bg-secondary col-start-1 row-start-3"></div>
                        <div class="bg-secondary col-start-2 row-start-3"></div>
                        <div class="bg-secondary col-start-3 row-start-3"></div>
                    </div>
                </div>
                <pre className='border border-black p-2 rounded-lg mb-7'>
                    <code>
                        {`<div class="`}<span className="bg-secondary p-1 rounded">box-content</span> {`h-32 w-32 p-4 border-4 ...">
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
