import React from 'react'

function TextOverflow() {
    return (
        <div className='h-full overflow-y-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Overflow.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-overflow</span> utility in LiFrame helps manage how text behaves when it overflows its container. It enables ellipsis or clip to control the text visibility and ensure no content spills out of the box in an undesired way.</p>

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
                            <td className="border-b border-[#ababab] py-2">truncate</td>
                            <td className="border-b border-[#ababab] py-2">overflow: hidden; <br /> text-overflow: ellipsis; <br /> white-space: nowrap;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-ellipsis</td>
                            <td className="border-b border-[#ababab] py-2">text-overflow: ellipsis;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-clip</td>
                            <td className="border-b border-[#ababab] py-2">text-overflow: clip;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Truncate</h6>
                    <p className='mb-4'>Use <span className='font-semibold'>truncate</span> to prevent text from wrapping and truncate overflowing text with an ellipsis (…) if needed.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className='max-w-sm mx-auto p-6 rounded-lg bg-secondary/50'>
                            <p class="truncate">
                                The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
                            </p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">truncate</span>{`">...</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Ellipsis</h6>
                    <p className='mb-4'>Use <span className="font-semibold">text-ellipsis</span> to truncate overflowing text with an ellipsis (…) if needed.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className='max-w-sm mx-auto p-6 rounded-lg bg-secondary/50'>
                            <p class="text-ellipsis overflow-hidden">
                                The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
                            </p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-ellipsis</span>{` overflow-hidden">...</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Clip</h6>
                    <p className='mb-4'>Use <span className="font-semibold">text-clip</span> to truncate the text at the limit of the content area.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className='max-w-sm mx-auto p-6 rounded-lg bg-secondary/50'>
                            <p class="text-clip overflow-hidden">
                                The longest word in any of the major English language dictionaries is <span class="text-slate-900 font-medium">pneumonoultramicroscopicsilicovolcanoconiosis,</span> a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano; medically, it is the same as silicosis.
                            </p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<div class="`}<span className="bg-secondary p-1 rounded">text-clip</span>{` overflow-hidden">...</div>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text overflow behavior using responsive prefixes like <span className='font-semibold'>sm:truncate</span> or <span className='font-semibold'>lg:overflow-ellipsis</span> to control text overflow across different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="truncate `}<span className="bg-secondary p-1 rounded">text-ellipsis</span>{`">
  <!-- ... -->
</p>`}
                        </code>
                    </pre>
            </section>
        </div>
    )
}

export default TextOverflow