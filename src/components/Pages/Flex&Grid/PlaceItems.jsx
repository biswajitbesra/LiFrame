import React from 'react'

function PlaceItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Place Items.</h1>
            <p className='mb-4'>The <span className='font-semibold'>place-items</span> utility in LiFrame is used to align grid items along both axes (horizontal and vertical). It combines the effects of the <span className='font-semibold'>justify-items</span> and <span className='font-semibold'>align-items</span> utilities, allowing you to control the alignment of all items within a grid container simultaneously.</p>

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
                            <td className="border-b border-[#ababab] py-2">place-items-start</td>
                            <td className="border-b border-[#ababab] py-2">place-items: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-items-end</td>
                            <td className="border-b border-[#ababab] py-2">place-items: end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-items-center</td>
                            <td className="border-b border-[#ababab] py-2">place-items: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-items-baseline</td>
                            <td className="border-b border-[#ababab] py-2">place-items: baseline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-items-stretch</td>
                            <td className="border-b border-[#ababab] py-2">place-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>place-items-&#9913;</span> utility applies alignment to all grid items at once. For example, <span className='font-semibold'>place-items-center</span> centers items both vertically and horizontally, while <span className='font-semibold'>place-items-start</span> aligns all items to the start of both axes.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-items-start</span> to place grid items on the start of their grid areas on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 h-56 gap-4">
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">01</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">02</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">03</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">04</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">05</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-start rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">06</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">place-items-start</span>{` ...">
  <div>01</div>
  <div>02</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>place-items-end</span> to place grid items on the end of their grid areas on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 h-56 gap-4">
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">01</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">02</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">03</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">04</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">05</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-end rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">06</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">place-items-end</span>{` ...">
  <div>01</div>
  <div>02</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>place-items-center</span> to place grid items on the center of their grid areas on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 h-56 gap-4">
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">01</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">02</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">03</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">04</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">05</div>
                            </div>
                            <div className="bg-secondary/40 grid place-items-center rounded-lg">
                                <div className="p-4 w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-secondary">06</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">place-items-center</span>{` ...">
  <div>01</div>
  <div>02</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>place-items-stretch</span> to stretch items along their grid areas on both axes.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 h-56">
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">01</div>
                            </div>
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">02</div>
                            </div>
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">03</div>
                            </div>
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">04</div>
                            </div>
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">05</div>
                            </div>
                            <div className="grid place-items-stretch rounded-lg">
                                <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-secondary">06</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">place-items-stretch</span>{` ...">
  <div>01</div>
  <div>02</div>
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
                <p className='mb-4'>You can use responsive prefixes such as <span className='font-semibold'>md:place-items-center</span> to change the alignment based on screen size. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> allow you to dynamically adjust the alignment of grid items during user interaction.</p>
                <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid place-items-start `}<span className="bg-secondary p-1 rounded">hover:place-items-center</span>{` ...">
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default PlaceItems