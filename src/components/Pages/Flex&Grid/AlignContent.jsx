import React from 'react'

function AlignContent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Content</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-content</span> utility in LiFrame controls the alignment of rows (or flex items) within a flex container when there is extra space along the cross axis. It is useful when you have multiple rows of items and want to adjust how they are spaced and aligned.</p>

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
                            <td className="border-b border-[#ababab] py-2">content-normal</td>
                            <td className="border-b border-[#ababab] py-2">align-content: normal;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-center</td>
                            <td className="border-b border-[#ababab] py-2">align-content: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-start</td>
                            <td className="border-b border-[#ababab] py-2">align-content: flex-start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-end</td>
                            <td className="border-b border-[#ababab] py-2">align-content: flex-end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-between</td>
                            <td className="border-b border-[#ababab] py-2">align-content: space-between;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-around</td>
                            <td className="border-b border-[#ababab] py-2">align-content: space-around;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-evenly</td>
                            <td className="border-b border-[#ababab] py-2">align-content: space-evenly;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-baseline</td>
                            <td className="border-b border-[#ababab] py-2">align-content: baseline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">content-stretch</td>
                            <td className="border-b border-[#ababab] py-2">align-content: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-content-&#9913;</span> utility controls how multiple rows or items are aligned within the container. For example, <span className='font-semibold'>align-content-start</span> aligns the rows to the start, while <span className='font-semibold'>align-content-center</span> centers them, and <span className='font-semibold'>align-content-end</span> aligns them to the end.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>content-start</span> to pack rows in a container against the start of the cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 content-start w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-purple-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-start</span>{`">
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
                    <p className='mb-4'>Use <span className='font-semibold'>content-center</span> to pack rows in a container in the center of the cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 content-center w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-sky-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-center</span>{`">
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
                    <p className='mb-4'>Use <span className='font-semibold'>content-end</span> to pack rows in a container against the end of the cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 content-end w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-pink-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-end</span>{`">
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
                    <h6 className='font-bold text-lg mb-2'>Space between</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>content-between</span> to distribute rows in a container such that there is an equal amount of space between each line.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 content-between w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-violet-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-between</span>{`">
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
                    <h6 className='font-bold text-lg mb-2'>Space around</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>content-around</span> to distribute rows in a container such that there is an equal amount of space around each line.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-x-4 content-around w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-blue-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-around</span>{`">
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
                    <h6 className='font-bold text-lg mb-2'>Space evenly</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>content-evenly</span> to distribute rows in a container such that there is an equal amount of space around each item, but also accounting for the doubling of space you would normally see between each item when using <span className='font-semibold'>content-around</span>.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-x-4 content-evenly w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">01</div>
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">02</div>
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">03</div>
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">04</div>
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">05</div>
                            <div className="p-4 shadow-lg rounded-lg bg-indigo-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-evenly</span>{`">
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
                    <p className='mb-4'>Use <span className='font-semibold'>content-stretch</span> to allow content items to fill the available space along the container’s cross axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 content-stretch w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">01</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">03</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">04</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">05</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-fuchsia-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-flow-col `}<span className="bg-secondary p-1 rounded">content-stretch</span>{`">
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
                    <h6 className='font-bold text-lg mb-2'>Normal</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>content-normal</span> to pack content items in their default position as if no <span className='font-semibold'>align-content</span> value was set.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 w-full rounded-lg bg-secondary/40 text-center h-56">
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">01</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">02</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">03</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">04</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">05</div>
                            <div className="p-4 flex justify-center items-center shadow-lg rounded-lg bg-indigo-500">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 gap-4 `}<span className="bg-secondary p-1 rounded">content-normal</span>{`">
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
                <p className='mb-4'>Responsive prefixes like <span className='font-semibold'>sm:align-content-center</span> can be used to apply different alignment rules for different screen sizes. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to adjust the alignment dynamically based on user interactions.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid content-start `}<span className="bg-secondary p-1 rounded">hover:content-around</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default AlignContent