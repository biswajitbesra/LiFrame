import React from 'react'

function Hyphens() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Hyphens. here we have to look for before and after pseudo</h1>
            <p className='mb-4'>The <span className='font-semibold'>hyphens</span> utility in LiFrame allows you to control how words are hyphenated at line breaks. You can use this utility to automatically insert hyphens for long words, improving text flow and readability.</p>

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
                            <td className="border-b border-[#ababab] py-2">hyphens-none</td>
                            <td className="border-b border-[#ababab] py-2">hyphens: none;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">hyphens-manual</td>
                            <td className="border-b border-[#ababab] py-2">hyphens: manual;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">hyphens-auto</td>
                            <td className="border-b border-[#ababab] py-2">hyphens: auto;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>None</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>hyphens-none</span> to prevent words from being hyphenated even if the line break suggestion <span className='font-semibold'>&amp;shy;</span> is used.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div class="mx-auto w-[22.5rem] bg-white shadow-xl p-6 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            <p class="hyphens-none">The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium dark:text-slate-200">pneumonoult&shy;ramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">hyphens-none</span>{`">
  ... pneumonoult`}<span className="bg-secondary/70 px-0.5 rounded">&amp;shy;</span>{`ramicroscopicsilicovolcanoconiosis, ...
</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Manual</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>hyphens-manual</span> to only set hyphenation points where the line break suggestion <span className='font-semibold'>&amp;shy;</span> is used.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div class="mx-auto w-[22.5rem] bg-white shadow-xl p-6 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            <p class="hyphens-manual">The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium dark:text-slate-200">pneumonoult&shy;ramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">hyphens-manual</span>{`">
  ... pneumonoult`}<span className="bg-secondary/70 px-0.5 rounded">&amp;shy;</span>{`ramicroscopicsilicovolcanoconiosis, ...
</p>`}                  
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Auto</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>hyphens-auto</span> to allow the browser to automatically choose hyphenation points based on the language. The line break suggestion <span className='font-semibold'>&amp;shy;</span> will be preferred over automatic hyphenation points.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div class="mx-auto w-[22.5rem] bg-white shadow-xl p-6 text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                            <p class="hyphens-auto">The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium dark:text-slate-200">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">hyphens-auto</span>{`">
  ... pneumonoultramicroscopicsilicovolcanoconiosis, ...
</p>`}  
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply hyphenation using responsive prefixes like <span className='font-semibold'>sm:hyphens-auto</span> or <span className='font-semibold'>lg:hyphens-none</span> for different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="hyphens-none `}<span className="bg-secondary p-1 rounded">hover:hyphens-auto</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Hyphens