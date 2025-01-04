import React from 'react'

function Visibility() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Visibility--</h1>
            <p className="mb-4">The <span className="font-semibold">visibility</span> utility in LiFrame controls whether an element is visible or hidden. Unlike <span className="font-semibold">display</span>, which removes the element from the document layout entirely, <span className="font-semibold">visibility</span> simply hides the element but still occupies space in the layout. This is useful when you want to hide an element but maintain the space it takes up.</p>
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
                            <td className='border-b border-[#ababab] py-2'>visible</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: visible;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>invisible</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: hidden;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>collapse</td>
                            <td className='border-b border-[#ababab] py-2'>visibility: collapse;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">invisible</span> utility to hide an element, but still maintain its place in the DOM, affecting the layout of other elements (compare with <span className="font-semibold">hidden</span> from the display documentation).</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="grid grid-cols-3 gap-4">
  <div>01</div>
  <div class="`}<span className="bg-secondary p-1 rounded">invisible</span>{` ...">02</div>
  <div>03</div>
</div>`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className="mb-4">You can apply the visibility utilities conditionally using pseudo-classes like <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, and others.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<div class="visible `}<span className="bg-secondary p-1 rounded">hover:invisible</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Visibility
