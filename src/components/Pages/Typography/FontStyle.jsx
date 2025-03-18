import React from 'react'

function FontStyle() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Style</h1>
            <p className='mb-4'>The <span className='font-semibold'>font-style</span> utility in LiFrame allows you to control the style of text, such as making it italicized or keeping it normal. This is useful for emphasizing text or following typographic conventions in design.</p>

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
                            <td className="border-b border-[#ababab] py-2">italic</td>
                            <td className="border-b border-[#ababab] py-2">font-style: italic;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">not-italic</td>
                            <td className="border-b border-[#ababab] py-2">font-style: normal;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply a font style, use <span className='font-semibold'>italic</span> to make text italic or <span className='font-semibold'>not-italic</span> to ensure it remains normal.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>italic</span>
                        <p className='italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>not-italic</span>
                        <p className='not-italic'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">italic</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">not-italic</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply font style utilities using responsive prefixes such as <span className='font-semibold'>md:italic</span> or <span className='font-semibold'>lg:not-italic</span> to adjust the text styling at different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="italic `}<span className="bg-secondary px-1 py-0.5 rounded">hover:not-italic</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FontStyle