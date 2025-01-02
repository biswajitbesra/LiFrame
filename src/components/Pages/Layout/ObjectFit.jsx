import React from 'react'

function ObjectFit() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Object Fit--</h1>
            <p className="mb-4">The <span className="font-semibold">object-fit</span> property in CSS specifies how an element (like an image or video) should resize to fit its container. LiFrame provides utility classes for setting this property, allowing you to control how content behaves within its box—whether it fills, contains, or covers the container.</p>
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
                            <td className='border-b border-[#ababab] py-2'>object-contain</td>
                            <td className='border-b border-[#ababab] py-2'>object-fit: contain;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-cover</td>
                            <td className='border-b border-[#ababab] py-2'>object-fit: cover; </td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-fill</td>
                            <td className='border-b border-[#ababab] py-2'>object-fit: fill;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-none</td>
                            <td className='border-b border-[#ababab] py-2'>object-fit: none;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>object-scale-down</td>
                            <td className='border-b border-[#ababab] py-2'>object-fit: scale-down;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4"></p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="bg-indigo-300 ...">
  <img class="`}<span className="bg-secondary p-1 rounded">object-cover</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="bg-indigo-300 ...">
  <img class="`}<span className="bg-secondary p-1 rounded">object-contain</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="bg-indigo-300 ...">
  <img class="`}<span className="bg-secondary p-1 rounded">object-fill</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="bg-indigo-300 ...">
  <img class="`}<span className="bg-secondary p-1 rounded">object-none</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div class="bg-indigo-300 ...">
  <img class="`}<span className="bg-secondary p-1 rounded">object-scale-down</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply object fit utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="object-contain `}<span className="bg-secondary p-1 rounded">hover:object-scale-down</span>{`">`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default ObjectFit
