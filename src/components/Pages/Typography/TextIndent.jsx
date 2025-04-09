import React from 'react'

function TextIndent() {
    return (
        <div className='h-full overflow-scroll'>
            <h1 className='text-3xl font-semibold mt-4 mb-6'>Text Indent.</h1>
            <p className='mb-4'>The <span className='font-semibold'>text-indent</span> utility in LiFrame allows you to control the indentation of text within blocks or paragraphs. By adjusting the indentation, you can create a cleaner and more organized look for text-heavy sections like paragraphs and articles.</p>

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
                            <td className="border-b border-[#ababab] py-2">indent-0</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-px</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 1px;</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-0.5</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.125rem; /* 2px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-1</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.25rem; /* 4px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-1.5</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.375rem; /* 6px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-2</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.5rem; /* 8px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-2.5</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.625rem; /* 10px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-3</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.75rem; /* 12px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-3.5</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 0.875rem; /* 14px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-4</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 1rem; /* 16px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-5</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 1.25rem; /* 20px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-6</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 1.5rem; /* 24px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-7</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 1.75rem; /* 28px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-8</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 2rem; /* 32px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-9</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 2.25rem; /* 36px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-10</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 2.5rem; /* 40px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-11</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 2.75rem; /* 44px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-12</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 3rem; /* 48px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-14</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 3.5rem; /* 56px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-16</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 4rem; /* 64px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-20</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 5rem; /* 80px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-24</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 6rem; /* 96px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-28</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 7rem; /* 112px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-32</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 8rem; /* 128px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-36</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 9rem; /* 144px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-40</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 10rem; /* 160px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-44</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 11rem; /* 176px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-48</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 12rem; /* 192px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-52</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 13rem; /* 208px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-56</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 14rem; /* 224px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-60</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 15rem; /* 240px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-64</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 16rem; /* 256px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-72</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 18rem; /* 288px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-80</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 20rem; /* 320px */</td>
                        </tr>
                        <tr>
                            <td className="border-b border-[#ababab] py-2">indent-96</td>
                            <td className="border-b border-[#ababab] py-2">text-indent: 24rem; /* 384px */</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Basic usage</h5>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Text indent</h6>
                    <p className="mb-4">Use the <span className='font-semibold'>indent-&#9913;</span> utilities to set the amount of empty space (indentation) that’s shown before text in a block.</p>
                    <div className="mb-5 p-4 rounded-lg border border-black">
                        <div className='max-w-sm mx-auto p-6 rounded-lg bg-secondary/50'>
                            <p className='indent-6'>Brewing the perfect cup of coffee is both an art and a science. By understanding the basics of grind size, water temperature, and brewing time, you can transform a simple cup into a rich, aromatic experience. A freshly brewed cup of coffee, with steam rising in the morning light.</p>
                        </div>
                    </div>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">indent-6</span>{`">
  Brewing the perfect cup of coffee is both an art...
</p>`}
                        </code>
                    </pre>
                </div>
                <div className="mb-7">
                    <h6 className='font-bold text-lg mb-2'>Using negative values</h6>
                    <p className="mb-4">To use a negative text indent value, prefix the class name with a dash to convert it to a negative value.</p>
                    <pre className="border border-black p-2 rounded-lg">
                        <code>
{`<p class="`}<span className="bg-secondary p-1 rounded">-indent-6</span>{`">
  Brewing the perfect cup of coffee is both an art...
</p>`}
                        </code>
                    </pre>
                </div>
            </section>

            <section className='mb-7'>
                <h5 className='font-semibold text-lg'>Applying conditionally</h5>
                <p className='mb-4'>You can conditionally apply text indentation using responsive prefixes like <span className='font-semibold'>sm:indent-6</span> or <span className='font-semibold'>lg:indent-10</span> to apply different indentation values across screen sizes.</p>
                <pre className="border border-black p-2 rounded-lg">
                    <code>
{`<p class="indent-3 `}<span className="bg-secondary p-1 rounded">hover:indent-6</span>{`">
  <!-- ... >
</p>`}
                    </code>
                </pre>
            </section>
        </div>
    )
}

export default TextIndent