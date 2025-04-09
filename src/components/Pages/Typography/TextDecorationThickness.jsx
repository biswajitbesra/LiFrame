import React from 'react'

function TextDecorationThickness() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Decoration Thickness.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-decoration-thickness</span> utility in LiFrame allows you to control the thickness of text decorations, such as underlines or strikethroughs. This ensures that you can emphasize or soften the decoration lines according to the design requirements of your project.</p>

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
                            <td className="border-b border-[#ababab] py-2">decoration-auto</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: auto;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-from-font</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: from-font;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-0</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: 0px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-1</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: 1px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-2</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: 2px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-4</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: 4px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">decoration-8</td>
                            <td className="border-b border-[#ababab] py-2">text-decoration-thickness: 8px;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To apply text decoration thickness, use classes like <span className='font-semibold'>decoration-1</span>, <span className='font-semibold'>decoration-2</span>, or <span className='font-semibold'>decoration-4</span> for different decoration thicknesses.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>decoration-1</span>
                        <p className='underline decoration-1'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-2</span>
                        <p className='underline decoration-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>decoration-4</span>
                        <p className='underline decoration-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-1</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-2</span>{`">Lorem ipsum dolor sit, ...</p>
<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">decoration-4</span>{`">Lorem ipsum dolor sit, ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text decoration thickness using responsive prefixes like <span className='font-semibold'>sm:decoration-thick</span> or <span className='font-semibold'>lg:decoration-thin</span> to manage decoration thickness across various screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="underline `}<span className="bg-secondary px-1 py-0.5 rounded">hover:decoration-2</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextDecorationThickness