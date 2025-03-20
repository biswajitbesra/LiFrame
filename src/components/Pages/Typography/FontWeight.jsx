import React from 'react'

function FontWeight() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Font Weight.</h1>
            <p className='mb-4'>The <span className='font-semibold'>font-weight</span> utility in LiFrame lets you control the thickness or boldness of text. It is useful for emphasizing headings, important text, or adjusting typography hierarchy.</p>

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
                            <td className="border-b border-[#ababab] py-2">font-thin</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 100;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-extralight</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 200;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-light</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 300;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-normal</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 400;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-medium</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 500;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-semibold</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 600;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-bold</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 700;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-extrabold</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 800;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">font-black</td>
                            <td className="border-b border-[#ababab] py-2">font-weight: 900;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>Use font weight classes such as <span className='font-semibold'>font-light</span>, <span className='font-semibold'>font-bold</span>, or <span className='font-semibold'>font-extrabold</span> to adjust the thickness of text.</p>
                <div className="mb-5 p-4 rounded-lg border border-black space-y-4">
                    <div>
                        <span className='text-third'>font-light</span>
                        <p className='font-light'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>font-normal</span>
                        <p className='font-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>font-medium</span>
                        <p className='font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>font-semibold</span>
                        <p className='font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                    <div>
                        <span className='text-third'>font-bold</span>
                        <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, dolor?</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-light</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-normal</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-medium</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-semibold</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>
<p class="`}<span className="bg-secondary px-1 py-0.5 rounded">font-bold</span>{`">Lorem ipsum dolor sit, amet consectetur ...</p>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>Font weight utilities can be applied conditionally using responsive prefixes like <span className='font-semibold'>sm:font-medium</span> or <span className='font-semibold'>lg:font-semibold</span> to modify text weight at different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="font-normal `}<span className="bg-secondary px-1 py-0.5 rounded">hover:font-bold</span>{`">
  <!-- ... -->
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default FontWeight