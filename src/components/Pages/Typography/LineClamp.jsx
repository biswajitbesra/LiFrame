import React from 'react'

function LineClamp() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Line Clamp.</h1>
            <p className='mb-4'>The <span className='font-semibold'>line-clamp</span> utility in LiFrame allows you to limit the number of visible lines of text within a container. It’s particularly useful for truncating text in UI elements like cards, list items, or buttons while maintaining readability.</p>

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
                            <td className="border-b border-[#ababab] py-2">line-clamp-1</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 1;<br />
                                line-clamp: 1;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-2</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 2;<br />
                                line-clamp: 2;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-3</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 3;<br />
                                line-clamp: 3;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-4</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 4;<br />
                                line-clamp: 4;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-5</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 5;<br />
                                line-clamp: 5;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-6</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: hidden;<br />
                                display: -webkit-box;<br />
                                -webkit-box-orient: vertical;<br />
                                -webkit-line-clamp: 6;<br />
                                line-clamp: 6;
                            </td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">line-clamp-none</td>
                            <td className="border-b border-[#ababab] py-2">
                                overflow: visible;<br />
                                display: block;<br />
                                -webkit-box-orient: horizontal;<br />
                                -webkit-line-clamp: none;<br />
                                line-clamp: none;
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <p className='mb-4'>To limit the number of lines, you can use the <span className='font-semibold'>line-clamp-&#9913;</span> class, where '&#9913;' represents the number of lines you want to display. For example, <span className='font-semibold'>line-clamp-3</span> will show only three lines of text.</p>
                <div className="mb-5 p-4 rounded-lg border border-black flex justify-center">
                    <div className='w-96 bg-secondary/40 p-4 rounded-lg'>
                        <img className='w-auto rounded-lg' src="https://plus.unsplash.com/premium_photo-1669748151567-f2c4c55be354?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p className='line-clamp-3 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum nulla amet, eius error consectetur neque earum ex excepturi dolore quisquam officia esse est odit! Laboriosam consequatur minus earum ea.</p>
                    </div>
                </div>
                <pre className="border border-black p-2 rounded-lg overflow-x-scroll">
                    <code>
{`<div>
  <img src="..." alt="" />
  <p class="`}<span className="bg-secondary px-1 py-0.5 rounded">line-clamp-3</span>{`">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum cum nulla amet, eius error consectetur neque earum ex excepturi dolore quisquam officia esse est odit! Laboriosam consequatur minus earum ea.</p>
</div>`}
                    </code>
                </pre>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply line clamping using responsive prefixes, like <span className='font-semibold'>sm:line-clamp-2</span> or <span className='font-semibold'>lg:line-clamp-4</span>, to control how text is clamped at different screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<div class="line-clamp-3 `}<span className="bg-secondary px-1 py-0.5 rounded">hover:line-clamp-4</span>{`">
  <!-- ... -->
</div>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default LineClamp