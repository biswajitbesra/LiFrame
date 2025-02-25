import React from 'react'

function Flex() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Flex</h1>
            <p className='mb-4'>The <span className='font-semibold'>flex</span> utility in LiFrame controls how a flex item grows and shrinks inside a flex container. It determines how much space an element takes up relative to its siblings.</p>

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
                            <td className="border-b border-[#ababab] py-2">flex-1</td>
                            <td className="border-b border-[#ababab] py-2">flex: 1 1 0%;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-auto</td>
                            <td className="border-b border-[#ababab] py-2">flex: 1 1 auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-initial</td>
                            <td className="border-b border-[#ababab] py-2">flex: 0 1 auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">flex-none</td>
                            <td className="border-b border-[#ababab] py-2">flex: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Flex 1</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-1</span> to allow a flex item to grow and shrink as needed, ignoring its initial size.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-secondary/50">01</div>
                            <div className="p-4 flex-1 w-64 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="p-4 flex-1 w-32 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex">
  <div class="flex-none w-14 ...">01</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-1</span>{` w-64 ...">02</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-1</span>{` w-32 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Auto</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-auto</span> to allow a flex item to grow and shrink, taking into account its initial size.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-secondary/50">01</div>
                            <div className="p-4 flex-auto w-64 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="p-4 flex-auto w-32 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex">
  <div class="flex-none w-14 ...">01</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-auto</span>{` w-64 ...">02</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-auto</span>{` w-32 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Initial</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-initial</span> to allow a flex item to shrink but not grow, taking into account its initial size.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="mt-2 flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="p-4 flex-none w-14 h-14 rounded-lg flex items-center justify-center bg-secondary/50">01</div>
                            <div className="p-4 flex-initial w-24 sm:w-64 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            <div className="p-4 flex-initial w-14 sm:w-32 rounded-lg flex items-center justify-center bg-secondary shadow-lg">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex">
  <div class="flex-none w-14 ...">01</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-initial</span>{` w-64 ...">02</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-initial</span>{` w-32 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>None</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>flex-none</span> to prevent a flex item from growing or shrinking.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex gap-4 bg-secondary/40 rounded-lg">
                            <div className="flex-none last:pr-8 sm:last:pr-0">
                                <div className="p-4 w-14 h-14 rounded-lg flex items-center justify-center bg-secondary">01</div>
                            </div>
                            <div className="flex-none last:pr-8 sm:last:pr-0">
                                <div className="p-4 w-32 rounded-lg flex items-center justify-center bg-secondary shadow-lg">02</div>
                            </div>
                            <div className="flex-1 last:pr-8 sm:last:pr-0">
                                <div className="p-4 rounded-lg flex items-center justify-center bg-secondary/50">03</div>
                            </div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex">
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-none</span>{` w-14 ...">01</div>
  <div class="`}<span className="bg-secondary px-1 py-0.5 rounded">flex-none</span>{` w-64 ...">02</div>
  <div class="flex-1 w-32 ...">03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can change how an element behaves inside a flex container based on screen sizes using responsive prefixes. Additionally, pseudo-classes like <span className='font-semibold'>hover</span> and <span className='font-semibold'>focus</span> allow dynamic adjustments.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="flex-none `}<span className="bg-secondary p-1 rounded">hover:flex-1</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Flex