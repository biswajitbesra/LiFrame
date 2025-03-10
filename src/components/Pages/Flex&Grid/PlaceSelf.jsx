import React from 'react'

function PlaceSelf() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Place Self.</h1>
            <p className='mb-4'>The <span className='font-semibold'>place-self</span> utility in LiFrame allows you to control the alignment of an individual grid item along both axes (horizontal and vertical). This is a shorthand for the <span className='font-semibold'>justify-self</span> and <span className='font-semibold'>align-self</span> utilities, allowing you to apply alignment to a specific item within the grid container.</p>

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
                            <td className="border-b border-[#ababab] py-2">place-self-auto</td>
                            <td className="border-b border-[#ababab] py-2">place-self: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-self-start</td>
                            <td className="border-b border-[#ababab] py-2">place-self: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-self-end</td>
                            <td className="border-b border-[#ababab] py-2">place-self: end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-self-center</td>
                            <td className="border-b border-[#ababab] py-2">place-self: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-self-stretch</td>
                            <td className="border-b border-[#ababab] py-2">place-self: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>place-self-&#9913;</span> utility applies both horizontal and vertical alignment to an individual item. For instance, <span className='font-semibold'>place-self-center</span> will center the item, while <span className='font-semibold'>place-self-start</span> aligns the item to the start of both axes.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Auto</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-self-auto</span> to align on item based on the value of the container's <span className='font-semibold'>place-align-items</span> property.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">01</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-500 shadow-lg palce-self-auto">02</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">03</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">04</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">05</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-indigo-300">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">place-self-auto</span>{` ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-self-start</span> to align an item to the start on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">01</div>
                            <div className="bg-secondary/40 rounded-lg grid">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg place-self-start">02</div>
                            </div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">03</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">04</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">05</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">place-self-start</span>{` ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-self-end</span> to align an item to the end on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">01</div>
                            <div className="bg-secondary/40 rounded-lg grid">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg place-self-end">02</div>
                            </div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">03</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">04</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">05</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">place-self-end</span>{` ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-self-center</span> to align an item at the center on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">01</div>
                            <div className="bg-secondary/40 rounded-lg grid">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-purple-500 shadow-lg place-self-center">02</div>
                            </div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">03</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">04</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">05</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-purple-300">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">place-self-center</span>{` ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-self-stretch</span> to stretch an item on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 place-iems-stretch font-mono text-white text-sm font-bold leading-6">
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">01</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-500 shadow-lg place-self-stretch">02</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">03</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">04</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">05</div>
                            <div className="p-8 rounded-lg flex items-center justify-center bg-fuchsia-300">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-2 ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">place-self-stretch</span>{` ...">02</div>
  <div>03</div>
  <div>04</div>
  <div>05</div>
  <div>06</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply <span className='font-semibold'>place-self</span> using responsive prefixes, such as <span className='font-semibold'>lg:place-self-start</span>, to adjust the alignment based on screen size. You can also use pseudo-classes like <span className='font-semibold'>hover</span> to dynamically adjust the item's alignment during user interaction.</p>
                <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="place-self-start `}<span className="bg-secondary p-1 rounded">hover:place-self-end</span>{`">
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default PlaceSelf