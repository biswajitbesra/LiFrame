import React from 'react'

function AlignSelf() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Align Self</h1>
            <p className='mb-4'>The <span className='font-semibold'>align-self</span> utility in LiFrame allows you to control the alignment of a specific flex or grid item along the cross axis, independently of the other items. This is useful when you want to align a single item differently within its container, while keeping the others aligned in the same way.</p>

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
                            <td className="border-b border-[#ababab] py-2">self-auto</td>
                            <td className="border-b border-[#ababab] py-2">align-self: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">self-start</td>
                            <td className="border-b border-[#ababab] py-2">align-self: flex-start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">self-end</td>
                            <td className="border-b border-[#ababab] py-2">align-self: flex-end;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">self-center</td>
                            <td className="border-b border-[#ababab] py-2">align-self: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">self-stretch</td>
                            <td className="border-b border-[#ababab] py-2">align-self: stretch;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">self-baseline</td>
                            <td className="border-b border-[#ababab] py-2">align-self: baseline;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>align-self-&#9913;</span> utility allows you to change the alignment of individual items. For example, <span className='font-semibold'>align-self-start</span> aligns the item to the start of the container, <span className='font-semibold'>align-self-center</span> centers the item, and <span className='font-semibold'>align-self-end</span> aligns it to the end.</p>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Auto</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>self-auto</span> to align on item based on the value of the container's <span className='font-semibold'>align-items</span> property.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-secondary/40 h-24">
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300 dark:bg-sky-800 dark:text-sky-500">01</div>
                            <div className="self-auto p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-sky-500">02</div>
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-sky-300 dark:bg-sky-800 dark:text-sky-500">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">self-auto</span>{` ...">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Start</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>self-start</span> to align an item to the start of the container’s cross axis, despite the container’s <span className='font-semibold'>align-items</span> value.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-secondary/40 h-24">
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">01</div>
                            <div className="self-start p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-pink-500">02</div>
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-pink-300 dark:bg-pink-800 dark:text-pink-400">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">self-start</span>{` ...">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>End</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>self-end</span> to align an item to the end of the container’s cross axis, despite the container’s <span className='font-semibold'>align-items</span> value.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-secondary/40 h-24">
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">01</div>
                            <div className="self-end p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-indigo-500">02</div>
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-indigo-300 dark:bg-indigo-800 dark:text-indigo-400">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">self-end</span>{` ...">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Center</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>self-center</span> to align an item along the center of the container’s cross axis, despite the container’s <span className='font-semibold'>align-items</span> value.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-secondary/40 h-24">
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">01</div>
                            <div className="self-center p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-purple-500">02</div>
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-purple-300 dark:bg-purple-800 dark:text-purple-400">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">self-center</span>{` ...">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Stretch</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>self-stretch</span> to stretch an item to fill the container’s cross axis, despite the container’s <span className='font-semibold'>align-items</span> value.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className="flex items-stretch gap-4 w-full rounded-lg bg-secondary/40 h-24">
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">01</div>
                            <div className="self-stretch p-4 flex-1 flex items-center justify-center shadow-lg rounded-lg bg-fuchsia-500">02</div>
                            <div className="p-4 flex-1 flex items-center justify-center rounded-lg bg-fuchsia-300 dark:bg-fuchsia-800 dark:text-fuchsia-400">03</div>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="flex items-stretch ...">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">self-stretch</span>{` ...">02</div>
  <div>03</div>
</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply the <span className='font-semibold'>align-self</span> utility using responsive prefixes, such as <span className='font-semibold'>md:align-self-center</span> to change the alignment based on screen size. Pseudo-classes like <span className='font-semibold'>hover</span> can also be used to dynamically adjust the item's alignment.</p>
            </section>
        </div>
    )
}

export default AlignSelf