import React from 'react'

function Floats() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Floats--</h1>
            <p className="mb-4">The <span className="font-semibold">float</span> property is used to position elements to the left or right of their container, allowing inline content (like text) to wrap around the floated element. LiFrame provides utility classes to handle floats effortlessly and responsively.</p>
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
                            <td className='border-b border-[#ababab] py-2'>float-start</td>
                            <td className='border-b border-[#ababab] py-2'>float: inline-start;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-end</td>
                            <td className='border-b border-[#ababab] py-2'>float: inline-end;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-right</td>
                            <td className='border-b border-[#ababab] py-2'>float: right;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-left</td>
                            <td className='border-b border-[#ababab] py-2'>float: left;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>float-none</td>
                            <td className='border-b border-[#ababab] py-2'>float: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">float-right</span> utility to float an element to the right of its container.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="`}<span className="bg-secondary p-1 rounded">float-right</span>{` ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="`}<span className="bg-secondary p-1 rounded">float-left</span>{` ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="`}<span className="bg-secondary p-1 rounded">float-none</span>{` ..." src="path/to/image.jpg">
<p>Maybe we can live without libraries, people like you and me. ...</p>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply floats utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="float-right`} <span className="bg-secondary p-1 rounded">hover:float-left</span> {`..." src="path/to/image.jpg">`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Floats
