import React from 'react'

function LetterSpacing() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Letter Spacing.</h1>
            <p className='mb-4'>The <span className='font-semibold'>letter-spacing</span> utility in LiFrame allows you to control the space between characters in text. Adjusting letter spacing is important for improving legibility, enhancing text aesthetics, or achieving a specific typographic effect.</p>

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
                            <td className="border-b border-[#ababab] py-2">tracking-tighter</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: -0.05em;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tracking-tight</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: -0.025em;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tracking-normal</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: 0em;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tracking-wide</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: 0.025em;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tracking-wider</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: 0.05em;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">tracking-widest</td>
                            <td className="border-b border-[#ababab] py-2">letter-spacing: 0.1em;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To adjust the letter spacing, you can use classes such as <span className='font-semibold'>tracking-tight</span>, <span className='font-semibold'>tracking-normal</span>, or <span className='font-semibold'>tracking-wide</span> to control the spacing between characters.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>tracking-tight</span>
                        <p className='tracking-tight'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>tracking-normal</span>
                        <p className='tracking-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>tracking-wide</span>
                        <p className='tracking-wide'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">tracking-tight</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">tracking-normal</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">tracking-wide</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply letter spacing utilities using responsive prefixes like <span className='font-semibold'>sm:tracking-tight</span> or <span className='font-semibold'>lg:tracking-wide</span> to change letter spacing at different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="tracking-tight `}<span className="bg-secondary px-1 py-0.5 rounded">hover:tracking-wide</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default LetterSpacing