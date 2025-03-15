import React from 'react'

function FontSize() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Size.</h1>
            <p className='mb-4'>The <span className='font-semibold'>font-size</span> utility in LiFrame allows you to control the size of text elements efficiently. Proper font sizing enhances readability, accessibility, and visual hierarchy in your design. Whether you need small captions, body text, or large headings, LiFrame provides a range of font-size classes to maintain consistency across your project.</p>

            <section className='mb-7 h-3/5 overflow-y-scroll'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'> Class </th>
                            <th className='text-left border-b border-[#ababab] py-2'> Properties </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-xs</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 0.75rem; /* 12px */ <br/> line-height: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-sm</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 0.875rem; /* 14px */ <br/> line-height: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-base</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 1rem; /* 16px */ <br/> line-height: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-lg</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 1.125rem; /* 18px */ <br/> line-height: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 1.25rem; /* 20px */ <br/> line-height: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-2xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 1.5rem; /* 24px */ <br/> line-height: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-3xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 1.875rem; /* 30px */ <br/> line-height: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-4xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 2.25rem; /* 36px */ <br/> line-height: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-5xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 3rem; /* 48px */ <br/> line-height: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-6xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 3.75rem; /* 60px */ <br/> line-height: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-7xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 4.5rem; /* 72px */ <br/> line-height: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-8xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 6rem; /* 96px */ <br/> line-height: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-9xl</td>
                            <td className="border-b border-[#ababab] py-2">font-size: 8rem; /* 128px */ <br/> line-height: 1;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>You can use predefined font size classes like <span className='font-semibold'>text-sm</span> for small text, <span className='font-semibold'>text-base</span> for regular content, and <span className='font-semibold'>text-3xl</span> for large headings. These classes ensure your text scales appropriately within the layout.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-base text-third'>text-sm</span>
                        <p className='text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-base text-third'>text-md</span>
                        <p className='text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-base text-third'>text-lg</span>
                        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">text-sm</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">text-md</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">text-lg</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Font size utilities can be applied conditionally using responsive prefixes like <span className='font-semibold'>md:text-lg</span> or <span className='font-semibold'>xl:text-4xl</span>, allowing text to adjust based on screen size for optimal readability.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="text-sm `}<span className="bg-secondary px-1 py-0.5 rounded">hover:text-md</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FontSize