import React from 'react'

function AlignItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Items</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-items</span> utility in LiFrame is used to align flex items or grid items along the cross axis. It determines how the items are positioned within the container along the vertical axis in a flex or grid layout.</p>

            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">items-start</td>
                            <td className="border-b border-[#ababab] py-2">align-items: flex-start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">items-end</td>
                            <td className="border-b border-[#ababab] py-2">align-items: flex-end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">items-center</td>
                            <td className="border-b border-[#ababab] py-2">align-items: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">items-baseline</td>
                            <td className="border-b border-[#ababab] py-2">align-items: baseline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">items-stretch</td>
                            <td className="border-b border-[#ababab] py-2">align-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-items-&#9913;</span> utility allows you to align flex items or grid items within their container. For example, <span className='font-semibold'>align-items-start</span> aligns the items to the start of the container, <span className='font-semibold'>align-items-center</span> centers them vertically, and <span className='font-semibold'>align-items-end</span> aligns them to the end.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>items-start</span> to align items to the start of the container's cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-start gap-4 w-full rounded-lg bg-stripes-pink text-center">
                            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">01</div>
                            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">02</div>
                            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">items-start</span>{` ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>items-end</span> to align items to the end of the container's cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-end gap-4 w-full rounded-lg bg-stripes-sky text-center">
                            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">01</div>
                            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">02</div>
                            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">items-end</span>{` ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>items-center</span> to align items along the center of the container's cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-center gap-4 w-full rounded-lg bg-stripes-violet text-center">
                            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">01</div>
                            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">02</div>
                            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-violet-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">items-center</span>{` ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>items-stretch</span> to stretch items to fill the container's cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-stripes-cyan text-center">
                            <div className="py-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">01</div>
                            <div className="py-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">02</div>
                            <div className="py-8 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-cyan-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">items-stretch</span>{` ...">
  <div class="py-4">01</div>
  <div class="py-12">02</div>
  <div class="py-8">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Baseline</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>items-baseline</span> to align items along the container's cross axis such that all of their baselines align.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-baseline gap-4 w-full rounded-lg bg-stripes-blue text-center">
                            <div className="pt-2 pb-6 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">01</div>
                            <div className="pt-8 pb-12 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">02</div>
                            <div className="pt-12 pb-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-blue-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">items-baseline</span>{` ...">
  <div class="pt-2 pb-6">01</div>
  <div class="pt-8 pb-12">02</div>
  <div class="pt-12 pb-4">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Conditional alignment can be applied with responsive prefixes like <span className='font-semibold'>lg:align-items-center</span> to adjust the alignment based on screen size. You can also use pseudo-classes such as <span className='font-semibold'>hover</span> to apply the alignment when the element is interacted with.</p>
                <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch `}<span className="bg-secondary p-1 rounded">hover:items-center</span>{`">
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default AlignItems