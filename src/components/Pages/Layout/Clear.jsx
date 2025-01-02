import React from 'react'

function Clear() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Clear--</h1>
            <p className="mb-4">The <span className="font-semibold">clear</span> property is used to control the behavior of elements that follow floated elements. It specifies whether an element should be moved below the preceding floated elements. LiFrame provides utility classes to easily manage this behavior in layouts.</p>
            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-start</td>
                            <td className='border-b border-[#ababab] py-2'>clear: inline-start;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-end</td>
                            <td className='border-b border-[#ababab] py-2'>clear: inline-end;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-left</td>
                            <td className='border-b border-[#ababab] py-2'>clear: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-right</td>
                            <td className='border-b border-[#ababab] py-2'>clear: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-both</td>
                            <td className='border-b border-[#ababab] py-2'>clear: both;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>clear-none</td>
                            <td className='border-b border-[#ababab] py-2'>clear: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">clear-left</span> utility to position an element below any preceding left-floated elements.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<article>
  <img class="float-left ..." src="path/to/image.jpg">
  <img class="float-right ..." src="path/to/image.jpg">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-left</span>{` ...">Maybe we can live without libraries...</p>
</article>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<article>
  <img class="float-left ..." src="path/to/image.jpg">
  <img class="float-right ..." src="path/to/image.jpg">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-right</span>{` ...">Maybe we can live without libraries...</p>
</article>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<article>
  <img class="float-left ..." src="path/to/image.jpg">
  <img class="float-right ..." src="path/to/image.jpg">
  <p class="`}<span className="bg-secondary p-1 rounded">clear-both</span>{` ...">Maybe we can live without libraries...</p>
</article>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply clear utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<p class="clear-left`} <span className="bg-secondary p-1 rounded">hover:clear-none</span> {`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Clear
