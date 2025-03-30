import React from 'react'

function TextAlign() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Align.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-align</span> utility in LiFrame allows you to control the alignment of text within its container. It provides options to align text to the left, right, center, or justify it across the width of its container, ensuring flexibility in your layout and design for optimal text presentation.</p>

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
                            <td className="border-b border-[#ababab] py-2">text-left</td>
                            <td className="border-b border-[#ababab] py-2">text-align: left;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-center</td>
                            <td className="border-b border-[#ababab] py-2">text-align: center;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-right</td>
                            <td className="border-b border-[#ababab] py-2">text-align: right;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-justify</td>
                            <td className="border-b border-[#ababab] py-2">text-align: justify;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-start</td>
                            <td className="border-b border-[#ababab] py-2">text-align: start;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">text-end</td>
                            <td className="border-b border-[#ababab] py-2">text-align: end;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To align text within a container, you can use classes such as <span className='font-semibold'>text-left</span> for left alignment, <span className='font-semibold'>text-center</span> for center alignment, <span className='font-semibold'>text-right</span> for right alignment, and <span className='font-semibold'>text-justify</span> for justified text.</p>
                <div className='space-y-8'>
                    <div>
                        <div className="mb-5 p-4 rounded-lg border border-black">
                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                        </div>
                        <pre className="border border-black p-2 rounded-lg">
                            <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-left</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <div className="mb-5 p-4 rounded-lg border border-black">
                            <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                        </div>
                        <pre className="border border-black p-2 rounded-lg">
                            <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-center</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <div className="mb-5 p-4 rounded-lg border border-black">
                            <p className='text-right'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                        </div>
                        <pre className="border border-black p-2 rounded-lg">
                            <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-right</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>`}
                            </code>
                        </pre>
                    </div>
                    <div>
                        <div className="mb-5 p-4 rounded-lg border border-black">
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad odio pariatur excepturi, mollitia natus nostrum sit tempora quaerat soluta. Nesciunt eligendi reprehenderit et corrupti magnam inventore officiis, accusamus vero beatae placeat obcaecati facilis a eaque ducimus harum, eos iure corporis reiciendis molestias amet ut dignissimos.</p>
                        </div>
                        <pre className="border border-black p-2 rounded-lg">
                            <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">text-justify</span>{`">Lorem ipsum dolor sit amet consectetur, ...</p>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text alignments using responsive prefixes like <span className='font-semibold'>sm:text-center</span> or <span className='font-semibold'>md:text-right</span> to control text alignment across different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="text-left `}<span className="bg-secondary p-1 rounded">hover:text-center</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextAlign