import React from 'react'

function ObjectFit() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Object Fit.</h1>
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
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Resizing to cover a container</h6>
                    <p className="mb-4">Use the <span className="font-semibold">object-cover</span> utility to resize an element’s content to cover its container.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className="text-center rounded-lg overflow-hidden w-56 sm:w-96 mx-auto">
                            <img className="object-cover h-48 w-full" src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"/>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div>
  <img class="`}<span className="bg-secondary p-1 rounded">object-cover</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Containing an element</h6>
                    <p className="mb-4">Use the <span className="font-semibold">object-contain</span> utility to resize an element’s content to stay contained within its.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
                            <div className="absolute inset-0 opacity-50 bg-secondary/50"></div>
                            <img className="relative z-10 object-contain h-48 w-full" src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"/>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div>
  <img class="`}<span className="bg-secondary p-1 rounded">object-contain</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Stretching to fit a container</h6>
                    <p className="mb-4">Use the <span className="font-semibold">object-fill</span> utility to stretch an element’s content to fit its container.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className="bg-secondary/50 rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
                            <img className="object-fill h-48 w-full" src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"/>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div>
  <img class="`}<span className="bg-secondary p-1 rounded">object-fill</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Scaling down if too large</h6>
                    <p className="mb-4">Use the <span className="font-semibold">object-scale-down</span> utility to display an element’s content at its original size but scale it down to fit its container if necessary.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
                            <div className="absolute inset-0 opacity-50 bg-secondary/50"></div>
                            <img className="relative z-10 object-scale-down h-48 w-full" src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"/>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div>
  <img class="`}<span className="bg-secondary p-1 rounded">object-scale-down</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                </div>
                <div className="mb-7">
                    <h6 className="font-bold text-lg mb-2">Using an element’s original size</h6>
                    <p className="mb-4">Use the <span className="font-semibold">object-none</span> utility to display an element’s content at its original size ignoring the container size.</p>
                    <div className="mb-5 p-5 rounded-lg border border-black">
                        <div className="relative rounded-lg text-center overflow-hidden w-56 sm:w-96 mx-auto">
                            <div className="absolute inset-0 opacity-50 bg-secondary/50"></div>
                            <img className="relative z-10 object-none h-48 w-full" src="https://plus.unsplash.com/premium_photo-1666963323736-5ee1c16ef19d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fG5hdHVyZXxlbnwwfDB8MHx8fDA%3D"/>
                        </div>
                    </div>
                    <pre className='border border-black p-2 rounded-lg'>
                    <code>
                    {`<div>
  <img class="`}<span className="bg-secondary p-1 rounded">object-none</span>{` h-48 w-96 ...">
</div>`}
                    </code>
                </pre>
                </div>
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
