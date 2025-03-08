import React from 'react'

function JustifyItems() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Items</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-items</span> utility in LiFrame is used to align items along the cross axis of a grid or flex container. It helps to control the alignment of grid items or flex items in the container.</p>

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
                            <td className="border-b border-[#ababab] py-2">justify-items-start</td>
                            <td className="border-b border-[#ababab] py-2">justify-items: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-items-end</td>
                            <td className="border-b border-[#ababab] py-2">justify-items: end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-items-center</td>
                            <td className="border-b border-[#ababab] py-2">justify-items: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-items-stretch</td>
                            <td className="border-b border-[#ababab] py-2">justify-items: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-items-start</span> to justify grid items against the start of their inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4">
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">1</div></div>
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">2</div></div>
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">3</div></div>
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">4</div></div>
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">5</div></div>
                            <div className='bg-secondary/40 grid justify-items-start rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">6</div></div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">justify-items-start</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-items-end</span> to justify grid items against the end of their inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4">
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">1</div></div>
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">2</div></div>
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">3</div></div>
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">4</div></div>
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">5</div></div>
                            <div className='bg-secondary/40 grid justify-items-end rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">6</div></div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">justify-items-end</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-items-center</span> to justify grid items along their inline axix.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4">
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">1</div></div>
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">2</div></div>
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">3</div></div>
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">4</div></div>
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">5</div></div>
                            <div className='bg-secondary/40 grid justify-items-center rounded-md'><div className="bg-secondary h-14 w-14 rounded-md flex justify-center items-center">6</div></div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">justify-items-center</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-items-stretch</span> to stretch items along their inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 justify-items-stretch">
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">01</div>
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">04</div>
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">05</div>
                            <div className="h-14 rounded-lg flex items-center justify-center bg-secondary shadow-lg">06</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 `}<span className="bg-secondary p-1 rounded">justify-items-stretch</span>{` gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>To apply conditional justification based on screen size, you can use responsive prefixes like <span className='font-semibold'>sm:justify-items-start</span> for small screens. Pseudo-classes like <span className='font-semibold'>hover</span> can also dynamically adjust the alignment as needed.</p>
                <pre  className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="grid justify-items-start `}<span className="bg-secondary p-1 rounded">hover:justify-items-center</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default JustifyItems