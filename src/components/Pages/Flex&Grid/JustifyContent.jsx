import React from 'react'

function JustifyContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Content.</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-content</span> utility in LiFrame allows you to align and distribute space between items along the main axis of a flex container. This is essential for controlling the overall layout and alignment of items in a flexbox or grid layout.</p>

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
                            <td className="border-b border-[#ababab] py-2">justify-normal</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: normal;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-start</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-end</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-center</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-between</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: space-between;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-around</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: space-around;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-evenly</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-stretch</td>
                            <td className="border-b border-[#ababab] py-2">justify-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>justify-&#9913;</span> utility controls the alignment of items along the main axis. For example, <span className='font-semibold'>justify-start</span> aligns items to the start of the container, while <span className='font-semibold'>justify-center</span> centers them, and <span className='font-semibold'>justify-between</span> distributes them evenly with space between.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-start</span> to justify items against the start of the container’s main axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-start gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-start</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-center</span> to justify items along the center of the container's main axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-center gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-center</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-end</span> to justify items against the end of the container’s main axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-end gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-end</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space between</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-between</span> to justify items along the container’s main axis such that there is an equal amount of space between each item.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-between gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-between</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space around</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-around</span> to justify items along the container’s main axis such that there is an equal amount of space on each side of each item.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-around gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-around</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Space evenly</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-evenly</span> to justify items along the container’s main axis such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using <span className='font-semibold'>justify-around</span>.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-evenly gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-evenly</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-stretch</span> to allow content items to fill the available space along the container’s main axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-flow-col justify-stretch gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-flow-col `}<span className="bg-secondary p-1 rounded">justify-stretch</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Normal</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-normal</span> to pack content items in their default position as if no <span className='font-semibold'>justify-content</span> value was set.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex justify-normal gap-4 bg-secondary/40 rounded-lg">
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>1</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>2</div>
                            <div className='h-14 w-14 rounded-lg shadow-md bg-secondary flex justify-center items-center'>3</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex `}<span className="bg-secondary p-1 rounded">justify-normal</span>{` gap-4">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can apply different justification rules based on screen size with responsive prefixes like <span className='font-semibold'>md:justify-center</span> for medium screens or larger. Additionally, you can use pseudo-classes like <span className='font-semibold'>hover</span> to adjust the alignment dynamically based on user interaction.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="flex justify-between hover:justify-evenly">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default JustifyContent