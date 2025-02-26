import React from 'react'

function FlexShrink() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex Shrink.</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex-shrink</span> utility determines how a flex item shrinks when there is not enough space in a flex container. It controls the proportion by which an item reduces its size compared to others.</p>

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
                            <td className="border-b border-[#ababab] py-2">shrink</td>
                            <td className="border-b border-[#ababab] py-2">flex-shrink: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">shrink-0</td>
                            <td className="border-b border-[#ababab] py-2">flex-shrink: 0;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Shrink</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>shrink</span> to allow a flex item to shrink if needed.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-secondary">01</div>
                            <div className="w-64 h-14 p-4 shrink rounded-lg flex items-center justify-center bg-secondary">02</div>
                            <div className="p-4 w-14 h-14 flex-none rounded-lg flex items-center justify-center bg-secondary">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex ...">
  <div class="flex-none w-14 h-14 ...">01</div>
  <div class="`}<span className="bg-secondary p-1 pt-0.5 rounded">shrink</span>{` w-64 h-14 ...">02</div>
  <div class="flex-none w-14 h-14 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Don't shrink</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>shrink-0</span> to prevent a flex item from shrinking.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 h-14 flex-1 rounded-lg flex items-center justify-center bg-secondary">01</div>
                            <div className="p-4 w-14 h-14 shrink-0 rounded-lg flex items-center justify-center bg-secondary">02</div>
                            <div className="p-4 h-14 flex-1 rounded-lg flex items-center justify-center bg-secondary">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex ...">
  <div class="flex-1 h-14">01</div>
  <div class="`}<span className="bg-secondary p-1 pt-0.5 rounded">shrink-0</span>{` w-14 h-14">02</div>
  <div class="flex-1 h-14">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can modify how elements shrink based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> can be used to dynamically adjust shrink behavior.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div className="shrink `}<span className="bg-secondary p-1 rounded">hover:shrink-0</span>{`">
    <!-- ... -->
</div>`}`
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FlexShrink