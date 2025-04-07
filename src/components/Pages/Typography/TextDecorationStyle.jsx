import React from 'react'

function TextDecorationStyle() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Decoration Style.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-decoration-style</span> utility in LiFrame allows you to control the appearance of text decorations. You can choose from solid, double, dotted, or dashed styles to give different visual emphasis to the text.</p>

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
                            <td className="border-b border-[#ababab] py-2">decoration-solid</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-style: solid;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-double</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-style: double;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-dotted</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-style: dotted;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-dashed</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-style: dashed;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-wavy</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-style: wavy;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply text decoration style, use classes like <span className='font-semibold'>decoration-solid</span>, <span className='font-semibold'>decoration-dotted</span>, or <span className='font-semibold'>decoration-dashed</span> for different decoration line styles.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>decoration-solid</span>
                        <p className='underline decoration-solid'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-double</span>
                        <p className='underline decoration-double'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-dotted</span>
                        <p className='underline decoration-dotted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-dashed</span>
                        <p className='underline decoration-dashed'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-wavy</span>
                        <p className='underline decoration-wavy'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-solid</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-double</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-dotted</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-dashed</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-wavy</span>{`">Lorem ipsum dolor sit, ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text decoration style using responsive prefixes like <span className='font-semibold'>sm:decoration-double</span> or <span className='font-semibold'>lg:decoration-dotted</span> to adjust decoration styles based on screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">hover:decoration-dashed</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextDecorationStyle