import React from 'react'

function JustifySelf() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Justify Self.</h1>
            <p className='mb-4'>The <span className='font-semibold'>justify-self</span> utility in LiFrame allows you to control the alignment of an individual item along the main axis within its container. This is useful when you want to align a specific item differently from others in a flex or grid container.</p>

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
                            <td className="border-b border-[#ababab] py-2">justify-self-auto</td>
                            <td className="border-b border-[#ababab] py-2">justify-self: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-self-start</td>
                            <td className="border-b border-[#ababab] py-2">justify-self: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-self-end</td>
                            <td className="border-b border-[#ababab] py-2">justify-self: end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-self-center</td>
                            <td className="border-b border-[#ababab] py-2">justify-self: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">justify-self-stretch</td>
                            <td className="border-b border-[#ababab] py-2">justify-self: stretch;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Auto</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-self-auto</span> to align on item based on the value of the grid's <span className='font-semibold'>justify-items</span> property.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 justify-items-stretch gap-4 text-center">
                            <div className="bg-secondary/40 p-5 rounded-md text-black/50">1</div>
                            <div className="bg-secondary p-5 justify-self-auto rounded-md">2</div>
                            <div className="bg-secondary/40 p-5 rounded-md text-black/50">3</div>
                            <div className="bg-secondary/40 p-5 rounded-md text-black/50">4</div>
                            <div className="bg-secondary/40 p-5 rounded-md text-black/50">5</div>
                            <div className="bg-secondary/40 p-5 rounded-md text-black/50">6</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 justify-items-stretch gap-4">
  <div>1</div>
  <div class="`}<span className="bg-secondary p-1 rounded">justify-self-auto</span>{`">2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>justify-self-start</span> to align a grid item to the start of its inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 justify-items-stretch gap-4 text-center">
                            <div className="bg-secondary p-5 rounded-md">1</div>
                            <div className='bg-secondary/40 rounded-md'><div className="bg-secondary justify-self-start py-5 w-16 rounded-md text-center">2</div></div>
                            <div className="bg-secondary p-5 rounded-md">3</div>
                            <div className="bg-secondary p-5 rounded-md">4</div>
                            <div className="bg-secondary p-5 rounded-md">5</div>
                            <div className="bg-secondary p-5 rounded-md">6</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 justify-items-stretch gap-4">
  <div>1</div>
  <div class="`}<span className="bg-secondary p-1 rounded">justify-self-start</span>{`">2</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>justify-self-end</span> to align a grid item to the end of its inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 justify-items-stretch gap-4 text-center">
                            <div className="bg-secondary p-5 rounded-md">1</div>
                            <div className='bg-secondary/40 rounded-md'><div className="bg-secondary justify-self-end py-5 w-16 rounded-md text-center">2</div></div>
                            <div className="bg-secondary p-5 rounded-md">3</div>
                            <div className="bg-secondary p-5 rounded-md">4</div>
                            <div className="bg-secondary p-5 rounded-md">5</div>
                            <div className="bg-secondary p-5 rounded-md">6</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 justify-items-stretch gap-4">
  <div>1</div>
  <div class="`}<span className="bg-secondary p-1 rounded">justify-self-end</span>{`">2</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>justify-self-center</span> to align a grid item along the center of its inline axix.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 text-center">
                            <div className="bg-secondary p-5 rounded-md">1</div>
                            <div className='bg-secondary/40 rounded-md'><div className="bg-secondary justify-self-center py-5 w-16 rounded-md text-center">2</div></div>
                            <div className="bg-secondary p-5 rounded-md">3</div>
                            <div className="bg-secondary p-5 rounded-md">4</div>
                            <div className="bg-secondary p-5 rounded-md">5</div>
                            <div className="bg-secondary p-5 rounded-md">6</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 justify-items-stretch gap-4">
  <div>1</div>
  <div class="`}<span className="bg-secondary p-1 rounded">justify-self-center</span>{`">2</div>
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
                    <p className='mb-4'>Use <span className='font-semibold'>justify-self-stretch</span> to stretch a grid item to fill the grid area on its inline axis.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="grid grid-cols-3 gap-4 justify-items-stretch text-center">
                            <div className="bg-secondary/40 rounded-md"><div className="bg-secondary py-5 w-16 rounded-md text-center">1</div></div>
                            <div className='bg-secondary p-5 justify-self-stretch rounded-md'>2</div>
                            <div className="bg-secondary/40 rounded-md"><div className="bg-secondary py-5 w-16 rounded-md text-center">3</div></div>
                            <div className="bg-secondary/40 rounded-md"><div className="bg-secondary py-5 w-16 rounded-md text-center">4</div></div>
                            <div className="bg-secondary/40 rounded-md"><div className="bg-secondary py-5 w-16 rounded-md text-center">5</div></div>
                            <div className="bg-secondary/40 rounded-md"><div className="bg-secondary py-5 w-16 rounded-md text-center">6</div></div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="grid grid-cols-3 justify-items-start gap-4">
  <div>1</div>
  <div class="`}<span className="bg-secondary p-1 rounded">justify-self-stretch</span>{`">2</div>
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
                <p className='mb-4'>You can apply the justify-self utility conditionally based on screen size using responsive prefixes like <span className='font-semibold'>md:justify-self-center</span>. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to adjust the item's alignment dynamically.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="justify-self-start `}<span className="bg-secondary p-1 rounded">hover:justify-self-end</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default JustifySelf