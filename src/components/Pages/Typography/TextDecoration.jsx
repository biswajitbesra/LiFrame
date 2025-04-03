import React from 'react'

function TextDecoration() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Decoration.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-decoration</span> utility in LiFrame allows you to add decorations to the text, such as underlines, overlines, or strikethroughs. It enables control over how text is visually enhanced for emphasis or style, ensuring a better user experience and visual appeal in your content.</p>

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
                            <td className="border-b border-[#ababab] py-2">underline</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-line: underline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">overline</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-line: overline;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-through</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-line: line-through;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">no-underline</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-line: none;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply text decoration, use classes like <span className='font-semibold'>underline</span>, <span className='font-semibold'>line-through</span>, or <span className='font-semibold'>no-underline</span> for customizing the text style.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>underline</span>
                        <p className='underline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>underline</span>
                        <p className='overline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>line-through</span>
                        <p className='line-through'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>no-underline</span>
                        <p className='no-underline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">underline</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">overline</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">line-through</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">no-underline</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text decoration using responsive prefixes like <span className='font-semibold'>sm:underline</span> or <span className='font-semibold'>lg:no-underline</span> for responsive control over text decoration across different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="no-underline `}<span className="bg-secondary px-1 py-0.5 rounded">hover:underline</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextDecoration
