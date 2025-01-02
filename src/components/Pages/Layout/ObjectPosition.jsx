import React from 'react'

function ObjectPosition() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Object Position--</h1>
            <p className="mb-4">The <span className="font-semibold">object-position</span> property in CSS determines how an element's content (e.g., images, videos, or any replaced element) is positioned within its box. LiFrame provides utility classes to set this property quickly, allowing you to align media content within its container.</p>
            <section className='mb-7'>
                <table className='w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>None</td>
                            <td className='border-b border-[#ababab] py-2'>width: 100%;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>sm (640px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 640px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>md (768px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 768px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>lg (1024px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1024px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>xl (1280px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1280px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>2xl (1536px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1536px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>2xl (1536px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1536px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>2xl (1536px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1536px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'>2xl (1536px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1536px;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-7">
                <h5 className='font-semibold text-lg mb-6'>Basic usage</h5>
                <p className="mb-4">Use the <span className="font-semibold">object-*</span> utilities to specify how a replaced element’s content should be positioned within its container.</p>
                <pre className='border border-black p-2 rounded-lg space-y-1 flex flex-col'>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-left-top</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-top</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-right-top</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-left</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-center</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-right</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-left-bottom</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-bottom</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                    <code>
                        {`<img class="object-none `}<span className="bg-secondary p-1 rounded">object-right-bottom</span>{` bg-yellow-300 w-24 h-24 ..." src="...">`}
                    </code>
                </pre>
            </section>
            <section className='mb-7'>
                <h5 className='font-semibold text-lg mb-6'>Applying conditionally</h5>
                <p className="mb-4">You can apply object position utilities dynamically using pseudo-utilities such as <span className="font-semibold">hover</span>, <span className="font-semibold">focus</span>, or <span className="font-semibold">media queries</span>.</p>
                <pre className='border border-black p-2 rounded-lg'>
                    <code>
                        {`<img class="object-center `}<span className="bg-secondary p-1 rounded">hover:object-top</span>{`" src="...">`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default ObjectPosition
