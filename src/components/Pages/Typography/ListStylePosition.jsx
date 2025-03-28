import React from 'react'

function ListStylePosition() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>List Style Position.</h1>
            <p className='mb-4'>The <span className='font-semibold'>list-style-position</span> utility in LiFrame allows you to control the position of the list marker (bullet point) relative to the list item content. This can help improve the visual layout of lists, especially in cases where the markers need to align differently with the text.</p>

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
                            <td className="border-b border-[#ababab] py-2">list-inside</td>
                            <td className="border-b border-[#ababab] py-2">list-style-position: inside;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">list-outside</td>
                            <td className="border-b border-[#ababab] py-2">list-style-position: outside;</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To control the position of the list marker, you can use <span className='font-semibold'>list-inside</span> or <span className='font-semibold'>list-outside</span> classes. The <span className='font-semibold'>list-inside</span> class places the marker inside the list item’s padding, while <span className='font-semibold'>list-outside</span> places it outside the item’s padding.</p>
                <div className="mb-5 py-4 px-8 rounded-lg border border-black overflow-hidden flex justify-center">
                    <div className="flex flex-col sm:flex-row gap-8">
                        <div className="relative">
                            <div className="absolute left-8 -top-8 -bottom-8 w-px bg-secondary/50"></div>
                            <p className="text-third mb-3 ml-8">list-inside</p>
                            <ul className="list-disc list-inside bg-secondary/40 rounded-xl shadow-lg p-4 pl-8">
                                <li>Virtual reality hiking simulator experience</li>
                                <li>Pocket-sized telescope</li>
                                <li>Self-watering plant pot</li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute left-8 -top-0 sm:-top-8 -bottom-8 w-px bg-secondary/50"></div>
                            <p className="text-third mb-3 ml-8">list-outside</p>
                            <ul className="list-disc list-outside bg-secondary/40 rounded-xl shadow-lg p-4 pl-8">
                                <li>Virtual reality hiking simulator experience</li>
                                <li>Pocket-sized telescope</li>
                                <li>Self-watering plant pot</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<ul class="`}<span className="bg-secondary p-1 rounded">list-inside</span>{` ...">
  <li>Virtual reality hiking simulator experience</li>
  <li>Pocket-sized telescope</li>
  <li>Self-watering plant pot</li>
</ul>

<ul class="`}<span className="bg-secondary p-1 rounded">list-outside</span>{` ...">
  <li>Virtual reality hiking simulator experience</li>
  <li>Pocket-sized telescope</li>
  <li>Self-watering plant pot</li>
</ul>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply list-style position utilities using responsive prefixes, such as <span className='font-semibold'>sm:list-inside</span> or <span className='font-semibold'>lg:list-outside</span>, to control the position of list markers across different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<ul class="list-outside `}<span className="bg-secondary p-1 rounded">hover:list-inside</span>{`">
  <!-- ... -->
</ul>`}
                    </code>
                </pre>
            </section>
        </div>

    )
}

export default ListStylePosition