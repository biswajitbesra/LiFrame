import React from 'react'

function FontFamily() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Family</h1>
            <p className='mb-4'><span className='font-semibold'>font-family</span> utility allows you to specify different font families, such as sans, serif, or mono, for text elements.</p>

            <section className='mb-7 overflow-x-scroll'>
                <table className='w-full text-nowrap'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2 pr-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2 pl-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2 pr-2'>font-sans</td>
                            <td className='border-b border-[#ababab] py-2 pl-2'>font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2 pr-2'>font-serif</td>
                            <td className='border-b border-[#ababab] py-2 pl-2'>font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2 pr-2'>font-mono</td>
                            <td className='border-b border-[#ababab] py-2 pl-2'>font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>The <span className='font-semibold'>font-&#9913;</span> utility allows you to define the typeface for your text. For example, <span className='font-semibold'>font-sans</span> applies a sans-serif font, <span className='font-semibold'>font-serif</span> applies a serif font, and <span className='font-semibold'>font-mono</span> applies a monospaced font.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-base text-third'>font-sans</span>
                        <p className='font-sans'>This text is displayed in a sans-serif</p>
                    </div>
                    <div>
                        <span className='text-base text-third'>font-serif</span>
                        <p className='font-serif'>This text is displayed in a serif</p>
                    </div>
                    <div>
                        <span className='text-base text-third'>font-mono</span>
                        <p className='font-mono'>This text is displayed in a monospace</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-sans</span>{`">This text is displayed in a sans-serif</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-serif</span>{`">This text is displayed in a serif</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-mono</span>{`">This text is displayed in a monospace</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply <span className='font-semibold'>font-family</span> using responsive prefixes, such as <span className='font-semibold'>lg:font-serif</span>, to switch font families based on screen size. You can also use pseudo-classes like <span className='font-semibold'>hover</span> to change fonts dynamically on user interaction.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="font-sans `}<span className="bg-secondary px-1 py-0.5 rounded">hover:font-serif</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>

    )
}

export default FontFamily