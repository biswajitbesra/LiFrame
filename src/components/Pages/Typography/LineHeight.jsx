import React from 'react'

function LineHeight() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Line Height.</h1>
            <p className='mb-4'>The <span className='font-semibold'>line-height</span> utility in LiFrame allows you to control the vertical spacing between lines of text. It’s essential for ensuring that the text remains legible and aesthetically pleasing, especially when dealing with multiple lines of content.</p>

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
                            <td className="border-b border-[#ababab] py-2">leading-3</td>
                            <td className="border-b border-[#ababab] py-2">line-height: .75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-4</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-5</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-6</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-7</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-8</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-9</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-10</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-none</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-tight</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.25;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-snug</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.375;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-normal</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.5;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-relaxed</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 1.625;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">leading-loose</td>
                            <td className="border-b border-[#ababab] py-2">line-height: 2;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To control the line height, you can use classes such as <span className='font-semibold'>leading-tight</span>, <span className='font-semibold'>leading-normal</span>, or <span className='font-semibold'>leading-loose</span> to adjust the spacing between lines of text.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>leading-tight</span>
                        <p className='leading-tight'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                    </div>
                    <div>
                        <span className='text-third'>leading-normal</span>
                        <p className='leading-normal'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                    </div>
                    <div>
                        <span className='text-third'>leading-loose</span>
                        <p className='leading-loose'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">leading-tight</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">leading-normal</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">leading-loose</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply line height utilities using responsive prefixes, like <span className='font-semibold'>sm:leading-tight</span> or <span className='font-semibold'>lg:leading-loose</span>, to adjust the line spacing at different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="leading-normal `}<span className="bg-secondary px-1 py-0.5 rounded">hover:leading-loose</span>{`
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default LineHeight
