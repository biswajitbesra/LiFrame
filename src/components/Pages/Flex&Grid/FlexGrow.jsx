import React from 'react'

function FlexGrow() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Grow.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-grow</span> utility defines how much a flex item should grow relative to its siblings. It helps in distributing available space dynamically inside a flex container.</p>

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
                            <td className="border-b border-[#ababab] py-2">grow</td>
                            <td className="border-b border-[#ababab] py-2">flex-grow: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">grow-0</td>
                            <td className="border-b border-[#ababab] py-2">flex-grow: 0;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Grow</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>grow</span> to allow a flex item to grow to fill any available space.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-secondary">01</div>
                            <div className="p-4 h-14 grow rounded-lg flex items-center justify-center bg-secondary">02</div>
                            <div className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-secondary">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex ...">
  <div class="flex-none w-14 h-14 ...">01</div>
  <div class="`}<span className="bg-secondary p-1 pt-0.5 rounded">grow</span>{` h-14 ...">02</div>
  <div class="flex-none w-14 h-14 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Don't grow</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>grow-0</span> to prevent a flex item from growing.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 h-14 grow rounded-lg flex items-center justify-center bg-secondary">01</div>
                            <div className="p-4 w-14 h-14 grow-0 rounded-lg flex items-center justify-center bg-secondary">02</div>
                            <div className="p-4 h-14 grow rounded-lg flex items-center justify-center bg-secondary">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex ...">
  <div class="grow h-14">01</div>
  <div class="`}<span className="bg-secondary p-1 pt-0.5 rounded">grow-0</span>{` w-14 h-14">02</div>
  <div class="grow h-14">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Flex grow behavior can be adjusted based on different screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically change how an item grows.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div className="grow `}<span className="bg-secondary p-1 rounded">hover:grow-0</span>{`">
    <!-- ... -->
</div>`}`
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FlexGrow