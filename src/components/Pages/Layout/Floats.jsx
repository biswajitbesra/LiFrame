import React from 'react'

function Floats() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Floats</h1>
            <section className='mb-8'>
                <table className='table-auto border-separate w-full'>
                    <thead>
                        <tr>
                            <th className='text-left border-b border-[#ababab] py-2'>Class</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Breakpoint</th>
                            <th className='text-left border-b border-[#ababab] py-2'>Properties</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2'>container</td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>None</td>
                            <td className='border-b border-[#ababab] py-2'>width: 100%;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>sm (640px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 640px;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>md (768px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 768px;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>lg (1024px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1024px;</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>xl (1280px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1280px;</td>
                        </tr>
                        <tr>
                            <td className='border-b border-[#ababab] py-2'></td>
                            <td className='border-b text-gray-700 border-[#ababab] py-2'>2xl (1536px)</td>
                            <td className='border-b border-[#ababab] py-2'>max-width: 1536px;</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section className="mb-8">
                <h5 className='font-semibold text-lg mb-6'>Basic usage</h5>
                <pre className='border border-black p-2 rounded-lg'>
                    <code className='font-thin'>
                        <span>&lt;</span><span>div</span> <span>class</span><span>=</span><span>"</span><span className='bg-secondary p-1 rounded'>container</span> <span>mx-auto</span><span>"</span><span>&gt;</span>...<span>&lt;/div&gt;</span>
                    </code>
                </pre>
            </section>
            <section className='mb-8'>
                <h5 className='font-semibold text-lg mb-6'>Applying conditionally</h5>
                <pre className='border border-black p-2 rounded-lg'>
                    <code className='font-thin'>
                        <span>&lt;</span><span>div</span> <span>class</span><span>="</span><span className='bg-secondary p-1 rounded'>md:container</span> <span>mx-auto</span><span>"</span><span>&gt;</span><span>...</span><span>&lt;/iframe&gt;</span>
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default Floats
