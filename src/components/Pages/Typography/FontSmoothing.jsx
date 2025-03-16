import React from 'react'

function FontSmoothing() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Smoothing.</h1>
            <p className='mb-4'>The <span className='font-semibold'>font-smoothing</span> utility in LiFrame enhances the clarity and legibility of text by controlling how anti-aliasing is applied. This is especially useful for improving text appearance on different screens, particularly for macOS and iOS devices where font smoothing can have a significant visual impact.</p>

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
                            <td className="border-b border-[#ababab] py-2">antialiased</td>
                            <td className="border-b border-[#ababab] py-2">-webkit-font-smoothing: antialiased;<br/>-moz-osx-font-smoothing: grayscale;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">subpixel-antialiased</td>
                            <td className="border-b border-[#ababab] py-2">-webkit-font-smoothing: auto;<br/>-moz-osx-font-smoothing: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>Use <span className='font-semibold'>antialiased</span> to enable smooth, gray-scale text rendering, or <span className='font-semibold'>subpixel-antialiased</span> for sharper text with higher contrast. These classes help maintain readability across various display types.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>antialiased</span>
                        <p className='antialiased'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>subpixel-antialiased</span>
                        <p className='subpixel-antialiased'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">antialiased</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">subpixel-antialiased</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Font smoothing utilities can be conditionally applied using responsive prefixes such as <span className='font-semibold'>md:antialiased</span> or <span className='font-semibold'>lg:subpixel-antialiased</span> to optimize text rendering based on screen size.</p>
                <pre className="border border-black p-2 rounded-lg">
	                <code>
{`<p class="antialiased `}<span className="bg-secondary px-1 py-0.5 rounded">hover:subpixel-antialiased</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FontSmoothing
