import React from 'react'

function PlaceContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Place Content</h1>
            <p className='mb-4'>The <span className='font-semibold'>place-content</span> utility in LiFrame is used to align items within both axes (horizontal and vertical) in a grid container. It allows you to set the alignment of the entire grid content, combining both the <span className='font-semibold'>justify-content</span> and <span className='font-semibold'>align-content</span> properties in a single utility class.</p>

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
                            <td className="border-b border-[#ababab] py-2">place-content-center</td>
                            <td className="border-b border-[#ababab] py-2">place-content: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-start</td>
                            <td className="border-b border-[#ababab] py-2">place-content: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-end</td>
                            <td className="border-b border-[#ababab] py-2">place-content: end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-between</td>
                            <td className="border-b border-[#ababab] py-2">place-content: space-between;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-around</td>
                            <td className="border-b border-[#ababab] py-2">place-content: space-around;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-evenly</td>
                            <td className="border-b border-[#ababab] py-2">place-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-baseline</td>
                            <td className="border-b border-[#ababab] py-2">place-content: baseline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">place-content-stretch</td>
                            <td className="border-b border-[#ababab] py-2">place-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>place-content-&#9913;</span> utility is a shorthand for controlling both horizontal and vertical alignment in a grid container. For instance, <span className='font-semibold'>place-content-center</span> will center the items both vertically and horizontally, while <span className='font-semibold'>place-content-start</span> aligns the content to the start of both axes.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-start</span> to pack items against the start of the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-start text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-start</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-center</span> to pack items in the center of the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-center text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-center</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-end</span> to pack items against the end of the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-end text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-end</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space between</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-between</span> to distribute grid items along the block axis so that there is an equal amount of space between each row on the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-between text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-between</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space around</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-around</span> distribute grid items such that there is an equal amount of space around each row on the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-around text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-around</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space evenly</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-evenly</span> to distribute grid items such that they are evenly spaced on the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-[repeat(2,56px)] gap-4 place-content-evenly text-center rounded-lg bg-secondary/40 h-56">
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="h-14 w-14 p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 gap-4 `}<span className="bg-secondary p-1 rounded">place-content-evenly</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>place-content-stretch</span> to stretch grid items along their grid areas on the block axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-2 place-content-stretch h-56 gap-4">
                            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">01</div>
                            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">02</div>
                            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">03</div>
                            <div className="p-4 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">04</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-2 `}<span className="bg-secondary p-1 rounded">place-content-stretch</span>{`">
  <div>01</div>
  <div>02</div>
  <div>03</div>
  <div>04</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Conditional alignment can be applied with responsive prefixes like <span className='font-semibold'>lg:place-content-start</span> to adjust the alignment based on screen size. Additionally, pseudo-classes such as <span className='font-semibold'>hover</span> can be used to dynamically change the content alignment.</p>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid place-content-start `}<span className="bg-secondary p-1 rounded">hover:place-content-center</span>{`">
  <!-- ... -->
</div>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default PlaceContent